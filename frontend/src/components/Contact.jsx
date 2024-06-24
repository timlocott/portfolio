function Contact(){
    return(
        <div className="text-white px-6 flex flex-col h-screen justify-center items-center">
            <div className="w-screen p-20 bg-lighterSlateGrey">
                <div className="flex flex-col items-center justify-center">
                    <div className="flex flex-col text-start mb-4">
                        <div>
                            Interested in my past work?
                        </div>
                        <div>
                            Want to reach out to me about exciting opportunities?
                        </div>
                    </div>
                    <div className="flex flex-row ml-80 justify-end">
                        <a className="bg-persianRed text-white hover:bg-jasper p-2 rounded-2xl" href="mailto:tsam.cottrell@gmail.com">
                            email me!
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;