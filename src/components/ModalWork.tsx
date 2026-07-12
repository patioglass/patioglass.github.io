import { useEffect } from "react";
import { getTagColor, type Work } from "../store/atoms";

interface ModalWorkProps {
    selectedWork: Work | null;
    setSelectedWork: React.Dispatch<React.SetStateAction<Work | null>>;
    getWorkImageSrc: (imageUrl?: string) => string;
}

export const ModalWork = ({ selectedWork, setSelectedWork, getWorkImageSrc }: ModalWorkProps) => {

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
    }, [selectedWork, setSelectedWork]);

    if (!selectedWork) return null;

    return (
        <div
            className="fixed inset-0 z-50 bg-black/70 p-4 md:p-8 overflow-y-auto h-screen"
            role="dialog"
            aria-modal="true"
            aria-label={`${selectedWork.title} の詳細`}
            onClick={() => setSelectedWork(null)}
            >
            <div className="mx-auto flex max-w-5xl items-center justify-center">
                <div
                className="w-full rounded-2xl bg-white shadow-2xl"
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

                    <div className="max-h-[70vh] p-5">
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
    );
}
