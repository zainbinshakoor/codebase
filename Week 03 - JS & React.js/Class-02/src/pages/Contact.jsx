import { useState,useEffect } from "react";
export function Contact() {
    const [formdata, setFormdata] = useState({
        name: "",
        email: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormdata({ ...formdata, [name]: value });
    }

    useEffect(() => {
        console.log("Form data changed:", formdata);
    }, []);

    return (
        <div>
            <form>
                <input
                    name="name"
                    type="text" placeholder="Name"
                    value={formdata.name}
                    onChange={handleChange}
                />
                <input
                    name="email"
                    type="email" placeholder="Email"
                    value={formdata.email}
                    onChange={handleChange}
                />
                <p>Name : {formdata.name}</p>
                <p>Email : {formdata.email}</p>
            </form>
        </div>
    );
}