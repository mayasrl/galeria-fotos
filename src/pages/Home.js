import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useMemo } from 'react';
import PhotoCard from '../components/PhotoCard';
import SearchBar from '../components/SearchBar';
import { photos } from '../lib/photos';
export default function Home() {
    const [searchQuery, setSearchQuery] = useState('');
    const filteredPhotos = useMemo(() => {
        if (!searchQuery.trim()) {
            return photos;
        }
        return photos.filter((photo) => photo.title.toLowerCase().includes(searchQuery.toLowerCase()));
    }, [searchQuery]);
    return (_jsxs("div", { className: "min-h-screen flex flex-col bg-white", children: [_jsx("header", { className: "border-b border-gray-200 py-8 px-4", children: _jsxs("div", { className: "max-w-6xl mx-auto", children: [_jsx("h1", { className: "text-4xl font-bold text-center text-gray-900 mb-2", children: "Galeria de Fotos" }), _jsx("div", { className: "w-16 h-1 bg-gray-300 mx-auto" })] }) }), _jsx("main", { className: "flex-1 py-12 px-4", children: _jsxs("div", { className: "max-w-6xl mx-auto", children: [_jsx("div", { className: "mb-12", children: _jsx(SearchBar, { onSearch: setSearchQuery }) }), filteredPhotos.length > 0 ? (_jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8", children: filteredPhotos.map((photo) => (_jsx(PhotoCard, { photo: photo }, photo.id))) })) : (_jsxs("div", { className: "text-center py-16", children: [_jsxs("p", { className: "text-xl text-gray-600", children: ["Nenhuma foto encontrada para \"", searchQuery, "\""] }), _jsx("p", { className: "text-gray-500 mt-2", children: "Tente pesquisar por outras palavras-chave" })] }))] }) }), _jsx("footer", { className: "border-t border-gray-200 py-6 px-4 bg-gray-50", children: _jsx("div", { className: "max-w-6xl mx-auto text-center text-gray-600 text-sm", children: "\u00A9 2026 Galeria de Fotos. Todos os direitos reservados." }) })] }));
}
