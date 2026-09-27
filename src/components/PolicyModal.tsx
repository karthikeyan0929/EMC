import React from 'react';
import { X, ShieldCheck } from 'lucide-react';

interface PolicyModalProps {
  title: string | null;
  content: string | null;
  onClose: () => void;
}

export const PolicyModal: React.FC<PolicyModalProps> = ({ title, content, onClose }) => {
  if (!title || !content) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-[#1b1c1a]/60 backdrop-blur-xs flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-md max-w-lg w-full p-6 sm:p-8 shadow-2xl relative border border-[#c1c8c2]/60 animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1 text-[#727974] hover:text-[#1b1c1a] hover:bg-[#efeeeb] rounded-xs transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 mb-2 text-[#032217]">
          <ShieldCheck className="w-5 h-5 text-[#1a382b]" />
          <span className="font-['Plus_Jakarta_Sans'] text-xs uppercase tracking-widest font-semibold text-[#1a382b]">
            Elena Vance Studio
          </span>
        </div>

        <h3 className="font-['Playfair_Display'] text-2xl text-[#1b1c1a] mb-4">
          {title}
        </h3>

        <div className="font-['Plus_Jakarta_Sans'] text-sm text-[#424844] leading-relaxed font-light whitespace-pre-line space-y-3">
          <p>{content}</p>
          <p className="text-xs text-[#727974] pt-2 border-t border-[#c1c8c2]/30">
            For dedicated legal or corporate compliance inquires, write directly to legal@elenavance.studio.
          </p>
        </div>

        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-[#efeeeb] text-[#1b1c1a] text-xs font-semibold rounded-xs font-['Plus_Jakarta_Sans'] hover:bg-[#eae8e5] transition-colors"
          >
            Acknowledge &amp; Close
          </button>
        </div>
      </div>
    </div>
  );
};
