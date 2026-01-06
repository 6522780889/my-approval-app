import React from 'react';
import { CheckCircle, XCircle, AlertTriangle, Monitor } from 'lucide-react';

const ApprovalCard = () => {
  return (
    <div className="min-h-screen bg-[#2D3033] flex items-center justify-center p-4 font-sans text-[#E5E7E9]">
      {/* Main Card */}
      <div className="bg-[#3D4146] w-full max-max-w-md rounded-xl shadow-2xl overflow-hidden border border-[#4F5459]">
        
        {/* Header Section */}
        <div className="p-4 border-b border-[#4F5459] flex justify-between items-center bg-[#34383D]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-gray-300 to-gray-500 rounded-full flex items-center justify-center shadow-inner">
               {/* แทนที่ด้วย Silver Bird Logo */}
               <div className="w-5 h-5 bg-[#2D3033] rounded-full opacity-50" />
            </div>
            <div>
              <h1 className="text-sm font-bold uppercase tracking-wider">Approval Request</h1>
              <p className="text-[10px] text-gray-400">REF: REQ0016966</p>
            </div>
          </div>
          <div className="text-right">
             <span className="text-[10px] bg-[#2D3033] px-2 py-1 rounded text-gray-400">Step 3 of 3</span>
          </div>
        </div>

        {/* Business Impact Banner (Compact) */}
        <div className="bg-[#F39C12]/10 border-y border-[#F39C12]/20 px-4 py-2 flex items-center gap-2">
          <AlertTriangle size={14} className="text-[#F39C12]" />
          <p className="text-[11px] font-semibold text-[#F39C12] uppercase tracking-tight">
            Critical: New Staff Onboarding (Deadline: 2025-03-28)
          </p>
        </div>

        {/* Content Body */}
        <div className="p-4 space-y-4">
          
          {/* Request Info Grid (2 Columns) */}
          <div className="grid grid-cols-2 gap-4 text-[12px]">
            <div className="space-y-2">
              <p className="text-gray-400 text-[10px] uppercase font-bold">Requester</p>
              <p className="font-medium">น.ส.สุโรธินี (680285)</p>
              <p className="text-gray-400 leading-tight">ฝ่ายพัฒนาและปรับปรุงระบบงาน 2</p>
            </div>
            <div className="space-y-2">
              <p className="text-gray-400 text-[10px] uppercase font-bold">Equipment</p>
              <p className="font-medium flex items-center gap-1">
                <Monitor size={12} /> Notebook High Spec
              </p>
              <p className="text-gray-400 leading-tight">Quantity: 1 Unit</p>
            </div>
          </div>

          {/* Technical Specs & Reason (Darker Box) */}
          <div className="bg-[#2D3033] rounded-lg p-3 space-y-2 border border-[#4F5459]/50">
            <div className="flex justify-between text-[11px]">
              <span className="text-gray-500">Justification:</span>
              <span className="text-gray-300 italic">For new developer workstation</span>
            </div>
            <div className="flex justify-between text-[11px]">
              <span className="text-gray-500">Last Approved:</span>
              <span className="text-gray-300">ดำรงค์ ว., เลิศศักดิ์ จ.</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-2">
            <button className="flex-1 bg-[#27AE60] hover:bg-[#219150] text-white py-2.5 rounded-lg font-bold text-sm flex items-center justify-center gap-2 transition-all active:scale-95 shadow-lg">
              <CheckCircle size={16} /> Approve
            </button>
            <button className="flex-1 border border-red-500/50 hover:bg-red-500/10 text-red-500 py-2.5 rounded-lg font-bold text-sm flex items-center justify-center gap-2 transition-all active:scale-95">
              <XCircle size={16} /> Reject
            </button>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default ApprovalCard;
