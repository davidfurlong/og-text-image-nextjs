import { ImageResponse } from 'next/og'
 
export const runtime = 'edge'
 
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const text = searchParams.get('text') || 'Hello World'
 
    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            textAlign: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            flexWrap: 'nowrap',
            backgroundColor: 'white',
            color: 'black',
          }}
        >
          <div
            style={{
              fontSize: 60,
              fontWeight: 'bold',
              maxWidth: '90%',
              wordWrap: 'break-word',
            }}
          >
            {text}
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    )
  } catch (e: any) {
    console.log(`${e.message}`)
    return new Response(`Failed to generate the image`, {
      status: 500,
    })
  }
}