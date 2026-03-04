import headerPartsImg from '../assets/header_parts_001.webp';

export const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="flex items-center justify-center gap-6 mb-8">
        <img
          src={headerPartsImg}
          alt="Contact Icon"
          className="w-40 h-40 object-contain rounded-full shadow-md"
        />
        <div className="text-center md:text-left">
          <h1 className="text-4xl font-bold mb-4 text-gray-800">Contact</h1>
          <p className="text-gray-600 text-lg">お気軽にお問い合わせください</p>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
            <p className="text-gray-700 mb-8 leading-relaxed">
              お仕事のご依頼やお問い合わせは、以下の連絡先、またはフォームよりお気軽にご連絡ください。
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-600 text-2xl">📧</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-800 mb-1">Email</h3>
                  <a 
                    href="mailto:patiopatimon@gmail.com"
                    className="text-blue-500 hover:text-blue-700 transition-colors break-all"
                  >
                    patiopatimon@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-sky-600 text-2xl">𝕏</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-800 mb-1">Twitter / X</h3>
                  <a 
                    href="https://twitter.com/patioglass"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-700 transition-colors"
                  >
                    @patioglass
                  </a>
                  <p className="text-gray-500 text-sm mt-1">最新情報はこちらで発信中</p>
                  <br />
                  <a
                    href="https://twitter.com/eropatio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-700 transition-colors"
                  >
                    @eropatio (成人向け)
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-orange-600 text-2xl font-bold">💝</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-800 mb-1">FANBOX</h3>
                  <a
                    href="https://patioglass.fanbox.cc/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-700 transition-colors"
                  >
                    patioglass.fanbox.cc
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-pink-600 text-2xl font-bold">🎨</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-800 mb-1">Skeb</h3>
                  <a
                    href="https://skeb.jp/@patioglass"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-700 transition-colors"
                  >
                    skeb.jp/@patioglass
                  </a>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-800 mb-1">Skeb(成人向け)</h3>
                  <a
                    href="https://skeb.jp/@eropatio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-700 transition-colors"
                  >
                    skeb.jp/@eropatio
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <a 
                href="https://forms.gle/oa3csdsyDuTCVWE58" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-slate-500 to-pink-500 hover:from-slate-600 hover:to-pink-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <span>📝</span>
                <span>お仕事のご依頼・お問い合わせフォーム</span>
              </a>
            </div>

            <div className="mt-10 pt-8 border-t border-gray-200">
              <p className="text-gray-600 text-sm text-center">
                通常1-5営業日以内にご返信いたします
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
