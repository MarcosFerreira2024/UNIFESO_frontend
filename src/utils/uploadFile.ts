"use server"

const cloudName = "dlf9xex9z";
export const uploadToCloud = async (fileData: File) => {

    try {
        const file = fileData

        const data = new FormData()
        data.append('file', file)
        data.append('upload_preset', "cloud_preset_Burnout")
        data.append('cloud_name', cloudName)



        const response = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
            method: 'POST',
            body: data
        })

        if (response.status !== 200) throw new Error("Tipo de arquivo incompátivel")
        const json = await response.json()




        return {
            url: json.secure_url,
            public_id: json.public_id
        };

    } catch (e) {
        if (e instanceof Error) return new Error(e.message)
        return new Error("Erro ao enviar imagem")
    }




}





