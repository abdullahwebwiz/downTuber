import axios from 'axios'
export async function POST(req: any) {
  const body = await req.json();
  console.log(body);
  try {
    await body;
    const response = await axios({
        method: "POST",
        url: "https://social-download-all-in-one.p.rapidapi.com/v1/social/autolink",
        headers: {
          "x-rapidapi-key": "49e5deb775msh9d6dff18330e707p1924e0jsnacf093a432ed",
          "x-rapidapi-host": "social-download-all-in-one.p.rapidapi.com",
          "Content-Type": "application/json",
        },
        data: {
          url: "https://www.youtube.com/watch?v=yCJH72nZ8DI",
          // url: "https://www.linkedin.com/posts/david-officer_logodesign-graphicdesign-creativesnug-activity-7264593292607053825-PAp3?utm_source=social_share_video_v2&utm_medium=android_app&utm_campaign=copy_link",
          // url: "https://youtube.com/shorts/3aazJfoMM-M?si=aa0nq_sNTQSIvVEx",
          // url:'https://vt.tiktok.com/ZSjmTwCrj/'
          // url:'https://www.xvideos.com/video.ieufvhd0c9a/receiving_corporal_punishment_for_solidarity_reform_school_in_japan'
        },
      });
    return Response.json(
      { message: 'success' },
      {
        status: 200,
      },
    );
  } catch (error) {
    return Response.json(
      { message: 'failed' },
      {
        status: 500,
      },
    );
  }
}
