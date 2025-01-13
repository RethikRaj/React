const ContactUs = () => {
    return (
        <div>
            <h1 className="font-bold text-xl m-2">Contact Us Page</h1>
            <form>
                <input type="text" placeholder="name" className="m-2 p-2 border border-black border-solid" />
                <input type="text" placeholder="message" className="m-2 p-2 border border-black border-solid" />
                <button className="m-2 p-2 border border-b-gray-950 bg-[#ff6b6b] border-solid">Submit</button>
            </form>
        </div>
    )
}

export default ContactUs;
