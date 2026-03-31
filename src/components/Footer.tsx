export const Footer = () => {
  const socialLinks = [
    { label: 'X', href: 'https://x.com/patioglass', icon: '𝕏', className: 'bg-black text-white border-black hover:bg-gray-800' },
    { label: 'Bluesky', href: 'https://bsky.app/profile/patioglass.bsky.social', icon: '☁', className: 'bg-sky-500 text-white border-sky-500 hover:bg-sky-600' },
    { label: 'pixiv', href: 'https://www.pixiv.net/users/2188539', icon: 'P', className: 'bg-blue-500 text-white border-blue-500 hover:bg-blue-600' },
    { label: 'FANBOX', href: 'https://patioglass.fanbox.cc/', icon: 'F', className: 'bg-orange-500 text-white border-orange-500 hover:bg-orange-600' },
    { label: 'YouTube', href: 'https://www.youtube.com/@PatioGlass_Official_Music', icon: '▶', className: 'bg-red-600 text-white border-red-600 hover:bg-red-700' },
  ];

  return (
    <footer className="mt-12 pb-10 border-t border-gray-200 bg-white/95">
      <div className="container mx-auto max-w-6xl px-4 py-10">
        <div className="flex flex-col items-center text-center">
          <p className="text-xs text-gray-500">Thank you!</p>
          <div className="mt-3 flex flex-wrap items-center justify-center gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                title={link.label}
                className={`inline-flex h-10 w-10 items-center justify-center rounded-full border text-sm font-semibold shadow-sm transition-all hover:-translate-y-0.5 ${link.className}`}
              >
                {link.icon}
              </a>
            ))}
          </div>

          <p className="mt-5 text-xs text-gray-500">© 2026 patioglass.</p>

          <a
            href="https://forms.gle/ca1hva36dk2W5MT7A"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 text-sm font-medium text-pink-600 underline decoration-pink-200 underline-offset-4 transition-colors hover:text-pink-700"
          >
            お問い合わせ（依頼フォーム）
          </a>
        </div>
      </div>
    </footer>
  );
};
