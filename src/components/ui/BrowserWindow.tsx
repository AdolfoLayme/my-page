interface BrowserWindowProps {
  url: string;
}

export const BrowserWindow = ({ url }: BrowserWindowProps) => (
  <div className="bg-gray-100 rounded-t-lg p-3 flex items-center gap-2">
    <div className="flex gap-2">
      <div className="w-3 h-3 rounded-full bg-red-500"></div>
      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
      <div className="w-3 h-3 rounded-full bg-green-500"></div>
    </div>
    
    <div className="flex-1 mx-4 bg-white rounded-md px-3 py-1 flex items-center gap-2">
      <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
      <span className="text-sm text-gray-600">{url}</span>
    </div>
  </div>
);
