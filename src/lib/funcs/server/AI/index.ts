
import { Configuration, OpenAIApi } from 'openai'
import {PRIVATE_OPENAI_KEY} from '$env/static/private';


export async function embedText(text:string){
    const input = text.toLowerCase().replace(/\n/g, ' ')

    const configuration = new Configuration({ apiKey: PRIVATE_OPENAI_KEY })
    const openai = new OpenAIApi(configuration)


    const embeddingResponse = await openai.createEmbedding({
        model: 'text-embedding-ada-002',
        input,
    })

    const [{ embedding }] = embeddingResponse.data.data

    return embedding
}