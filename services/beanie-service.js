const SUPABASE_URL = 'https://gxwgjhfyrlwiqakdeamc.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNjQxMTMxMiwiZXhwIjoxOTUxOTg3MzEyfQ.PHekiwfLxT73qQsLklp0QFEfNx9NlmkssJFDnlvNIcA';
const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function getBeanieBaby(id) {
    const response = await client
        .from('beanie_babies')
        .select()
        .match({ id })
        .single();
    
    return response.data;
}

export async function getBeanieBabies() {
    const response = await client
        .from('beanie_babies')
        .select();

    return response.data;
}