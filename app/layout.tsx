import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"]
});

export const metadata: Metadata = {
  title: "Frigus Fiesta",
  description: "Empowering students and young professionals with immersive internship programs in Full Stack Development, Data Science, Cyber Security, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <div>
          <main className="relative z-10 overflow-hidden">
            {children}
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  (function(){
                    if(!window.chatbase||window.chatbase("getState")!=="initialized"){
                      window.chatbase=(...args)=>{
                        if(!window.chatbase.q){window.chatbase.q=[]}
                        window.chatbase.q.push(args)
                      };
                      window.chatbase=new Proxy(window.chatbase,{
                        get(target,prop){
                          if(prop==="q"){return target.q}
                          return (...args)=>target(prop,...args)
                        }
                      })
                    }
                    const onLoad=function(){
                      const script=document.createElement("script");
                      script.src="https://www.chatbase.co/embed.min.js";
                      script.id="KK51L-QXHrFz0BfSB6aMJ";
                      script.domain="www.chatbase.co";
                      document.body.appendChild(script)
                    };
                    if(document.readyState==="complete"){
                      onLoad()
                    }else{
                      window.addEventListener("load",onLoad)
                    }
                  })();
                `
              }}
            />
          </main>
        </div>
      </body>
    </html>
  );
}