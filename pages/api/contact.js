const handler = async (req,res)=>{
    const {method, body} = req;
    if (method==='POST'){
        const {email, name, message} = body;

        if (
            !email ||
            !email.includes('@')||
            !name ||
            name.trim() === ''||
            !message ||
            message.trim() === ''
        ){
            res.status(422).json({message: 'Invalid input'})
            return;
        }

        const newMessage = {
            email, name, message
        }

        try {
            const result = await fetch(`${process.env.firebaseBaseURL}/messages.json`, {
                method: 'POST',
                body: JSON.stringify(newMessage),
            });
            console.log(result)
            res.status(201).json({message: 'Successfully stored message!', data: newMessage})
        }catch (e) {
            console.log(e)
            res.status(500).json({message: "Could not send data"})
        }
    }else {
        res.status(405).send(`Method ${method} Not Allowed`)
    }

}
export default handler;