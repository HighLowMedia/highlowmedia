export const uploadFile = async ({
    fileName,
    file,
    }: {
    fileName: string;
    file: File;
    }) => {
    try {
        //const formData = new FormData();
        //formData.append('file', file);
        const response = await fetch('https://3vk0q6jjh5.execute-api.us-east-1.amazonaws.com/prod/highlowmediasurveillanceteeuploads/' + fileName, {
            method: 'PUT',
            body: file,
        });
        if (response.ok) {
            console.log('File uploaded successfully');
            return true;
        } else {
            console.error('Error uploading file');
            return false;
        }
    } catch (err) {
        console.log(err);
    }
};