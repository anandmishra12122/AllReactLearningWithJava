const conf = {
    appWriterurl : String(import.meta.env.VITE_APPWRITE_URL),

    appwriteprojectid : String(import.meta.env.VITE_APPWRITE_PROJECT_ID),

    appwriterdatabaseid : String(import.meta.env.VITE_APPWRITE_DATABASE_ID),

    appwritercollectionid : String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    
    appwritebucketid : String(import.meta.env.VITE_APPWRITE_BUCKET_ID),

}

export default conf;