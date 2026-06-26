import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useSetAtom } from 'jotai';
import { selectedTagAtom, tagOptions } from '../store/atoms';
import headerImg from '../assets/header.webp';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isWorksOpen, setIsWorksOpen] = useState(false);
  const setSelectedTag = useSetAtom(selectedTagAtom);
  const navigate = useNavigate();

  const handleTagClick = (tag: string) => {
    setSelectedTag(tag);
    navigate('/works');
    setIsMenuOpen(false);
    setIsWorksOpen(false);
  };

  return (
    <>
    <header className="bg-white sticky top-0 z-50">
      <nav className="container mx-auto max-w-6xl px-4 py-4">
        <div className="flex items-center justify-start md:justify-center">
          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-600 hover:text-gray-900 focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Desktop menu */}
          <ul className="hidden md:flex space-x-18" style={{ fontFamily: "'Nunito', sans-serif" }}>
            <li>
              <Link
                to="/"
                className="flex flex-col items-center text-gray-600 hover:text-gray-900 transition-colors tracking-wider"
              >
                <span className="text-lg">Home</span>
                <span className="text-gray-400 text-xs">トップ</span>
              </Link>
            </li>
            {/* Works with dropdown */}
            <li className="relative">
              <button
                onClick={() => setIsWorksOpen(!isWorksOpen)}
                className="flex flex-col items-center text-gray-600 hover:text-gray-900 transition-colors tracking-wider"
              >
                <span className="text-lg flex items-center gap-1">
                  Works
                  <svg className={`w-4 h-4 transition-transform ${isWorksOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
                <span className="text-gray-400 text-xs">作品</span>
              </button>
              {/* Dropdown menu */}
              {isWorksOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 py-2 min-w-[140px] z-50">
                  {tagOptions.map((tag) => (
                    <button
                      key={tag}
                      onClick={() => handleTagClick(tag)}
                      className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors text-sm"
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              )}
            </li>
            {/*
            <li>
              <Link
                to="/bio"
                className="flex flex-col items-center text-gray-600 hover:text-gray-900 transition-colors tracking-wider"
              >
                <span className="text-lg">Bio</span>
                <span className="text-gray-400 text-xs">経歴</span>
              </Link>
            </li>
            */}
          </ul>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <ul className="md:hidden mt-4 space-y-2 pb-4" style={{ fontFamily: "'Nunito', sans-serif" }}>
            <li>
              <Link
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className="flex flex-col text-gray-600 hover:text-gray-900 py-2 tracking-wider font-medium"
              >
                <span className="text-lg">Home</span>
                <span className="text-gray-400 text-xs">トップ</span>
              </Link>
            </li>
            {/* Works accordion for mobile */}
            <li>
              <button
                onClick={() => setIsWorksOpen(!isWorksOpen)}
                className="flex flex-col w-full text-left text-gray-600 hover:text-gray-900 py-2 tracking-wider font-medium"
              >
                <span className="text-lg flex items-center gap-1">
                  Works
                  <svg className={`w-4 h-4 transition-transform ${isWorksOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
                <span className="text-gray-400 text-xs">作品</span>
              </button>
              {isWorksOpen && (
                <div className="pl-4 mt-2 space-y-1 border-l-2 border-gray-200">
                  {tagOptions.map((tag) => (
                    <button
                      key={tag}
                      onClick={() => handleTagClick(tag)}
                      className="block w-full text-left py-1.5 text-gray-600 hover:text-gray-900 transition-colors text-sm"
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              )}
            </li>
            {/*
            <li>
              <Link
                to="/bio"
                onClick={() => setIsMenuOpen(false)}
                className="flex flex-col text-gray-600 hover:text-gray-900 py-2 tracking-wider font-medium"
              >
                <span className="text-lg">Bio</span>
                <span className="text-gray-400 text-xs">経歴</span>
              </Link>
            </li>
            */}
          </ul>
        )}
      </nav>
    </header>
    <section
      className="relative bg-no-repeat bg-cover bg-center md:bg-top-left text-white py-20 px-4 min-h-[33vh] text-align-center flex items-center justify-center"
      style={{ backgroundImage: `url(${headerImg})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/30 to-black/40" />
      <div className="container mx-auto text-center relative z-10">
        <h1 className="text-5xl lg:text-6xl font-light mb-5 tracking-tight drop-shadow-xl">
          PatioGlass Official Site
        </h1>
        <p className="text-base md:text-lg font-normal tracking-normal drop-shadow mb-8">
          PatioGlass の活動記録や作品、連絡先などをまとめています。
        </p>
      </div>
    </section>
    </>
  );
};
