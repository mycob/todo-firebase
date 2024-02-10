export async function POST  (req,res) {
    return new Response(JSON.stringify({hello: 'world'}), { status: 200})
}