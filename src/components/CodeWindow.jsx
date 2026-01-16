import { motion } from "framer-motion";

export function CodeWindow() {
  const codeLines = [
    { line: 1, html: <span className="text-pink-500">const</span>, text: " developer = {" },
    { line: 2, html: <span className="text-blue-400">  name</span>, text: ': "Davis Kibet",' },
    { line: 3, html: <span className="text-blue-400">  role</span>, text: ': "Full Stack Developer",' },
    { line: 4, html: <span className="text-blue-400">  stack</span>, text: ': ["React", "Node.js", "Express"],' },
    { line: 5, html: <span className="text-blue-400">  location</span>, text: ': "Kenya",' },
    { line: 6, html: <span className="text-blue-400">  hireable</span>, text: ': <span class="text-yellow-400">true</span>,' },
    { line: 7, text: "};" },
    { line: 8, text: "" },
    { line: 9, html: <span className="text-green-400">developer</span>, text: ".buildAmazingThings();" },
  ];

  return (
    <div className="relative w-full max-w-lg mx-auto bg-[#1e1e1e] rounded-xl shadow-2xl overflow-hidden border border-gray-800 font-mono text-sm md:text-base">
      {/* Title Bar */}
      <div className="flex items-center px-4 py-2 bg-[#2d2d2d] border-b border-gray-800">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <div className="ml-4 text-gray-400 text-xs">Profile.js</div>
      </div>

      {/* Code Content */}
      <div className="p-6 text-gray-300 overflow-x-auto">
        {codeLines.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 + 0.5 }}
            className="flex"
          >
            <span className="text-gray-600 mr-4 select-none w-6 text-right">{item.line}</span>
            <span className="whitespace-pre">
              {item.html ? item.html : null}
              {item.text.replace(/<[^>]+>/g, '') /* Simple cleanup if mixing strings and jsx, but mostly using custom render logic below */}
               {/* Render HTML content properly */}
               <span dangerouslySetInnerHTML={{ 
                 __html: item.text.replace(/([":,[\]])/g, '<span class="text-gray-400">$1</span>')
                                 .replace(/"([^"]+)"/g, '<span class="text-green-300">"$1"</span>') 
               }} />
            </span>
          </motion.div>
        ))}
      </div>
      
      {/* Cursor Animation equivalent */}
      <motion.div 
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 0.8 }}
        className="absolute bottom-6 left-8 w-2 h-4 bg-primary"
      />
    </div>
  );
}
