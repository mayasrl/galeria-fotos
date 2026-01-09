import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
export default function SearchBar({ onSearch }) {
    const [query, setQuery] = useState('');
    const handleChange = (e) => {
        const value = e.target.value;
        setQuery(value);
        onSearch(value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(query);
    };
    return (_jsx("form", { onSubmit: handleSubmit, className: "w-full max-w-2xl mx-auto", children: _jsxs("div", { className: "flex gap-2", children: [_jsx("div", { className: "flex-1 relative", children: _jsx("input", { type: "text", placeholder: "Pesquise por palavras-chave...", value: query, onChange: handleChange, className: "w-full px-4 py-3 border border-gray-300 rounded-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" }) }), _jsxs("button", { type: "submit", className: "px-6 py-3 bg-blue-600 text-white rounded-sm hover:bg-blue-700 transition-colors duration-200 flex items-center gap-2 font-medium", children: [_jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [_jsx("circle", { cx: "11", cy: "11", r: "8" }), _jsx("path", { d: "m21 21-4.35-4.35" })] }), _jsx("span", { className: "hidden sm:inline", children: "Buscar" })] })] }) }));
}
