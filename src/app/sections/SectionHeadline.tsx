import Section from "../components/Section";
import YouTube from 'react-youtube';
import { getThemeClasses } from "../utils/getThemeClasses";

interface SectionHeadlineProps {
    title: string;
    subtitle: string;
    vslilink: string | undefined;
    background?: string;
    color?: string;
    ctatext: string;
}

const getYouTubeVideoId = (url: string | undefined): string | null => {
    if (!url) return null;
    
    const regex = /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/;
    const match = url.match(regex);
    return match ? match[1] : null;
};

export default function SectionHeadline({title, subtitle, vslilink, background, color}: SectionHeadlineProps){

    const videoId = getYouTubeVideoId(vslilink);
    
    const opts = {
        height: '100%',
        width: '100%',
        playerVars: {
            autoplay: 1,
            playsinline: 1,
            controls: 1,
            rel: 0,
            showinfo: 0,
        },
    };
    
    return(
        <Section className={`${getThemeClasses(background, color)} py-25`}>
            <h2 className="font-bold text-center mb-10">{title}</h2>
            <p className="text-xl mb-20">{subtitle} R$ {process.env.NEXT_PUBLIC_TICKET_PRICE}</p>
            
            {videoId ? (
                <div className="w-full max-w-2xl mx-auto">
                    <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                        <div className="absolute inset-0">
                            <YouTube 
                                videoId={videoId}
                                opts={opts}
                                className="w-full h-full rounded-lg shadow-lg"
                                onReady={() => console.log('YouTube player ready')}
                                onError={(e) => {
                                    console.error('YouTube error:', e);
                                    console.error('Video src:', vslilink);
                                }}
                            />
                        </div>
                    </div>
                </div>
            ) : (
                <div className="w-full max-w-2xl mx-auto bg-gray-200 rounded-lg p-8 text-center">
                    <p className="text-gray-600">Vídeo não disponível</p>
                    <p className="text-sm text-gray-500 mt-2">URL: {vslilink}</p>
                </div>
            )
            }
        </Section>
    )
}