import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export default function PhotoCard({ photo }) {
    return (_jsxs("div", { className: "group overflow-hidden rounded-sm bg-white shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-105", children: [_jsx("div", { className: "relative aspect-square overflow-hidden bg-gray-100", children: _jsx("img", { src: photo.url, alt: photo.title, className: "h-full w-full object-cover transition-transform duration-300 group-hover:scale-110", loading: "lazy" }) }), _jsx("div", { className: "p-4", children: _jsx("h3", { className: "text-center text-base font-medium text-gray-900 line-clamp-2", children: photo.title }) })] }));
}
