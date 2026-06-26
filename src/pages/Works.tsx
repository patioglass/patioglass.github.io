import { useEffect, useState } from 'react';
import { useAtom } from 'jotai';
import { worksAtom, loadingAtom, selectedTagAtom, tagOptions, showCommissionOnlyAtom, includeSecondaryCreationAtom, viewModeAtom, fetchWorks, getTagColor, type Work } from '../store/atoms';
import headerPartsImg from '../assets/header_parts_002.webp';


export const Works = () => {
  const [works, setWorks] = useAtom(worksAtom);
  const [loading, setLoading] = useAtom(loadingAtom);
  const [selectedTag, setSelectedTag] = useAtom(selectedTagAtom);
  const [showCommissionOnly, setShowCommissionOnly] = useAtom(showCommissionOnlyAtom);
  const [includeSecondaryCreation, setIncludeSecondaryCreation] = useAtom(includeSecondaryCreationAtom);
  const [viewMode, setViewMode] = useAtom(viewModeAtom);
  const [selectedWork, setSelectedWork] = useState<Work | null>(null);

  const getWorkImageSrc = (imageUrl?: string) =>
    imageUrl ? `/images/${imageUrl.split('=').pop()}.webp` : '';

  // タグと依頼物フィルターでフィルタリング
  const filteredWorks = works.filter(work => {
    const matchesTag = selectedTag === 'すべて' || work.tags?.includes(selectedTag);
    const matchesCommission = !showCommissionOnly || work.isCommission === true;
    // tagsに「二次創作」が含まれているかどうかで判定
    const isSecondary = work.tags?.includes('二次創作') || false;
    const matchesSecondaryCreation = includeSecondaryCreation || !isSecondary;
    return matchesTag && matchesCommission && matchesSecondaryCreation;
  });

  useEffect(() => {
    const loadWorks = async () => {
      setLoading(true);
      try {
        const data = await fetchWorks();
        setWorks(data);
      } catch (error) {
        console.error('Failed to fetch works:', error);
      } finally {
        setLoading(false);
      }
    };

    if (works.length === 0) {
      loadWorks();
    }

    // モバイルサイズの場合は初期表示をリスト形式に設定
    const handleRouteMount = () => {
      if (window.innerWidth < 768) {
        setViewMode('list');
      }
    };

    handleRouteMount();
  }, [works.length, setWorks, setLoading, setViewMode]);

  useEffect(() => {
    if (!selectedWork) {
      return;
    }

    const originalOverflow = document.body.style.overflow;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedWork(null);
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedWork]);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="flex items-center justify-center gap-6 mb-8">
        <img
          src={headerPartsImg}
          alt="Works Icon"
          className="w-40 h-40 object-contain rounded-full shadow-md"
        />
        <div className="text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold mb-3 text-gray-800">Works</h1>
          <p className="text-gray-600 text-base">これまでに作ったもの</p>
        </div>
      </div>

      <div className="container mx-auto px-4">
        {/* フィルターと表示切り替え */}
        <div className="flex justify-center items-center gap-6 mb-8 flex-wrap">
          {/* タグ絞り込み */}
          <select
            value={selectedTag}
            onChange={(e) => setSelectedTag(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            {tagOptions.map((tag) => (
              <option key={tag} value={tag}>
                {tag}
              </option>
            ))}
          </select>

          {/* 依頼物フィルター */}
          <label className="flex items-center gap-2 cursor-pointer select-none">
            <input
              type="checkbox"
              checked={showCommissionOnly}
              onChange={(e) => setShowCommissionOnly(e.target.checked)}
              className="w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
            />
            <span className="text-gray-700">依頼物のみ表示</span>
          </label>
          
          {/* 二次創作フィルター */}
          <label className="flex items-center gap-2 cursor-pointer select-none">
            <input
              type="checkbox"
              checked={includeSecondaryCreation}
              onChange={(e) => setIncludeSecondaryCreation(e.target.checked)}
              className="w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
            />
            <span className="text-gray-700">二次創作を含める</span>
          </label>
          
          {/* 表示形式切り替え */}
          <div className="flex items-center gap-2 bg-gray-200 p-1 rounded-lg">
            <button
              onClick={() => setViewMode('list')}
              className={`px-4 py-2 rounded-md transition-all ${
                viewMode === 'list'
                  ? 'bg-white text-gray-800 shadow-md'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <button
              onClick={() => setViewMode('grid')}
              className={`px-4 py-2 rounded-md transition-all ${
                viewMode === 'grid'
                  ? 'bg-white text-gray-800 shadow-md'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
            </button>
          </div>
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
          </div>
        ) : filteredWorks.length === 0 ? (
          <div className="text-center text-gray-500 py-12">
            該当する作品がありません
          </div>
        ) : viewMode === 'list' ? (
          <div className="mx-auto space-y-4">
            {filteredWorks.map((work) => (
              <div
                key={work.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 relative"
              >
                <div className="flex flex-col md:flex-row">
                  {/* 画像エリア */}
                  {work.imageUrl && (
                    <div className="md:w-64 md:flex-shrink-0 relative overflow-hidden">
                      {work.isCommission && (
                        <div className="absolute top-0 left-0 z-10">
                          <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-bold px-8 py-1.5 shadow-lg transform -translate-x-6 translate-y-2 -rotate-45">
                            依頼制作
                          </div>
                        </div>
                      )}
                      <img
                        src={getWorkImageSrc(work.imageUrl)}
                        alt={work.title}
                        className="aspect-[4/3] w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  )}
                  
                  {/* コンテンツエリア */}
                  <div className="flex-1 p-6">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div className="flex-1">
                        {/* タグ表示 */}
                        {work.tags && work.tags.length > 0 && (
                          <div className="flex flex-wrap gap-2 mb-2">
                            {work.tags.map((tag, index) => (
                              <span
                                key={index}
                                className={`px-3 py-1 rounded-full text-xs font-medium ${getTagColor(tag)}`}
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                        
                        <h2 className="text-xl font-bold text-gray-800 mb-1">{work.title}</h2>
                        {work.date && (
                          <p className="text-sm text-gray-400">{work.date}</p>
                        )}
                      </div>
                      
                      {/* 依頼物バッジ（画像なしの場合） */}
                      {!work.imageUrl && work.isCommission && (
                        <div className="relative flex-shrink-0 w-20 h-20 overflow-hidden">
                          <div className="absolute top-0 left-0">
                            <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-bold px-8 py-1.5 shadow-lg transform -translate-x-6 translate-y-2 -rotate-45">
                              依頼制作
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                    
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">{work.description}</p>

                    {/* 複数リンク表示 */}
                    {work.links && work.links.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {work.links.map((link, index) => (
                          <a
                            key={index}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-3 py-1.5 bg-gray-800 hover:bg-gray-700 text-white text-xs rounded-lg transition-colors font-medium"
                          >
                            {link.label}
                            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          // タイル形式（3列グリッド）
          <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredWorks.map((work) => (
              <div
                key={work.id}
                className="group aspect-square relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-[1.02]"
                onClick={() => setSelectedWork(work)}
              >
                {work.imageUrl ? (
                  <img
                    src={getWorkImageSrc(work.imageUrl)}
                    alt={work.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                    <span className="text-gray-400">{work.title}</span>
                  </div>
                )}
                
                {work.isCommission && (
                  <div className="absolute top-0 left-0 z-10">
                    <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-bold px-8 py-1.5 shadow-lg transform -translate-x-6 translate-y-2 -rotate-45">
                      依頼制作
                    </div>
                  </div>
                )}
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <div className="space-y-3">
                    {work.date && (
                      <p className="text-gray-200 text-xs font-medium">{work.date}</p>
                    )}
                    {work.tags && work.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1">
                        {work.tags.map((tag, index) => (
                          <span key={index} className={`inline-block px-2 py-1 text-xs rounded font-medium ${getTagColor(tag)}`}>
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                    <h3 className="text-white font-semibold text-sm leading-tight">{work.title}</h3>
                    {work.description && (
                      <p className="text-gray-200 text-xs leading-snug line-clamp-2">{work.description}</p>
                    )}
                    <p className="text-gray-100 text-xs font-medium mt-2">クリックで詳細を見る</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {selectedWork && (
          <div
            className="fixed inset-0 z-50 bg-black/70 p-4 md:p-8"
            role="dialog"
            aria-modal="true"
            aria-label={`${selectedWork.title} の詳細`}
            onClick={() => setSelectedWork(null)}
          >
            <div className="mx-auto flex h-full max-w-5xl items-center justify-center">
              <div
                className="w-full overflow-hidden rounded-2xl bg-white shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center justify-between border-b border-gray-200 px-4 py-3">
                  <h2 className="text-base font-semibold text-gray-800">作品詳細</h2>
                  <button
                    type="button"
                    onClick={() => setSelectedWork(null)}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-700"
                    aria-label="モーダルを閉じる"
                  >
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr]">
                  <div className="bg-gray-100">
                    {selectedWork.imageUrl ? (
                      <img
                        src={getWorkImageSrc(selectedWork.imageUrl)}
                        alt={selectedWork.title}
                        className="h-full max-h-[70vh] w-full object-contain"
                      />
                    ) : (
                      <div className="flex h-[45vh] items-center justify-center px-6 text-center text-gray-400">
                        画像が登録されていません
                      </div>
                    )}
                  </div>

                  <div className="max-h-[70vh] overflow-y-auto p-5">
                    <h3 className="text-xl font-bold text-gray-800">{selectedWork.title}</h3>
                    {selectedWork.date && (
                      <p className="mt-1 text-sm text-gray-400">{selectedWork.date}</p>
                    )}

                    {selectedWork.tags && selectedWork.tags.length > 0 && (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {selectedWork.tags.map((tag, index) => (
                          <span
                            key={index}
                            className={`px-3 py-1 rounded-full text-xs font-medium ${getTagColor(tag)}`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    {selectedWork.description && (
                      <p className="mt-4 whitespace-pre-line text-sm leading-relaxed text-gray-600">
                        {selectedWork.description}
                      </p>
                    )}

                    <div className="mt-6">
                      <p className="mb-3 text-sm font-semibold text-gray-700">関連リンク</p>
                      {selectedWork.links && selectedWork.links.length > 0 ? (
                        <div className="space-y-2">
                          {selectedWork.links.map((link, index) => (
                            <a
                              key={index}
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="group flex items-center justify-between rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-50"
                            >
                              <span className="font-medium">{link.label}</span>
                              <svg className="h-4 w-4 text-gray-400 group-hover:text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                            </a>
                          ))}
                        </div>
                      ) : (
                        <p className="text-sm text-gray-500">リンクは登録されていません。</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
