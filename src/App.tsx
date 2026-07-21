/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
import ResumePDF from './components/ResumePDF';
import RecommendationPDF from './components/RecommendationPDF';
import { Download, FileText, FileBadge } from 'lucide-react';

export default function App() {
  const [activeDoc, setActiveDoc] = useState<'resume' | 'recommendation'>('recommendation');

  return (
    <div className="min-h-screen bg-[#0A0C10] flex flex-col p-4 md:p-8 font-sans">
      <div className="max-w-5xl mx-auto w-full flex-1 flex flex-col gap-6">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 bg-[#111827] p-6 rounded-lg border border-[#1F2937]">
          <div>
            <h1 className="text-2xl font-bold text-white tracking-tight">Document Generator</h1>
            <p className="text-[#94A3B8] text-sm mt-1">Preview and download your formatted documents.</p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <div className="hidden lg:flex items-center gap-2 text-xs text-[#94A3B8] mr-2">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Optimized for printing & &lt;1MB
            </div>

            <div className="flex bg-[#0A0C10] p-1 rounded border border-[#1F2937]">
              <button 
                onClick={() => setActiveDoc('resume')}
                className={`flex items-center gap-2 px-4 py-2 rounded text-sm font-medium transition-colors ${activeDoc === 'resume' ? 'bg-[#1E293B] text-[#38BDF8]' : 'text-[#94A3B8] hover:text-white'}`}
              >
                <FileText className="w-4 h-4" />
                Resume
              </button>
              <button 
                onClick={() => setActiveDoc('recommendation')}
                className={`flex items-center gap-2 px-4 py-2 rounded text-sm font-medium transition-colors ${activeDoc === 'recommendation' ? 'bg-[#1E293B] text-[#38BDF8]' : 'text-[#94A3B8] hover:text-white'}`}
              >
                <FileBadge className="w-4 h-4" />
                Recommendation
              </button>
            </div>

            {activeDoc === 'resume' ? (
              <PDFDownloadLink
                document={<ResumePDF />}
                fileName="AGHA_CHIBIKE_EMMANUEL_Resume.pdf"
                className="flex items-center justify-center gap-2 px-6 py-2.5 bg-[#38BDF8] hover:bg-[#7DD3FC] text-[#0A0C10] font-bold rounded transition-colors whitespace-nowrap"
              >
                {({ loading }) => (
                  <>
                    <Download className="w-4 h-4" />
                    {loading ? 'Generating PDF...' : 'Download PDF'}
                  </>
                )}
              </PDFDownloadLink>
            ) : (
              <PDFDownloadLink
                document={<RecommendationPDF />}
                fileName="AGHA_CHIBIKE_EMMANUEL_Recommendation.pdf"
                className="flex items-center justify-center gap-2 px-6 py-2.5 bg-[#38BDF8] hover:bg-[#7DD3FC] text-[#0A0C10] font-bold rounded transition-colors whitespace-nowrap"
              >
                {({ loading }) => (
                  <>
                    <Download className="w-4 h-4" />
                    {loading ? 'Generating PDF...' : 'Download PDF'}
                  </>
                )}
              </PDFDownloadLink>
            )}
          </div>
        </div>

        <div className="flex-1 bg-[#111827] rounded-lg border border-[#1F2937] overflow-hidden min-h-[600px] relative">
          <PDFViewer key={activeDoc} className="w-full h-full absolute inset-0 border-none" showToolbar={true}>
            {activeDoc === 'resume' ? <ResumePDF /> : <RecommendationPDF />}
          </PDFViewer>
        </div>
      </div>
    </div>
  );
}
