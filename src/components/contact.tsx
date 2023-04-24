import { useEffect } from "react";

export const Contact = () => {
    useEffect(() => {
        const head = document.querySelector('head');
        const script = document.createElement('script');
        script.setAttribute(
          'src',
          'https://assets.calendly.com/assets/external/widget.js'
        );
        head!.appendChild(script);
      }, []);
    
      return (
        <div className="block grid content-evenly">
            <div
             className="calendly-inline-widget"
             data-url={"https://calendly.com/wolfeiiimedia/30-minuters-samtal"}
            />
        </div>
      );
};

export default Contact;