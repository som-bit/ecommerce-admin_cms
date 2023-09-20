/** @type {import('next').NextConfig} */


const nextConfig = {
    //when we use foreign host and sources such as cloudinary we have to add domain names
    images: {
        domains: [
            "res.cloudinary.com"
        ]
    }
}

module.exports = nextConfig
