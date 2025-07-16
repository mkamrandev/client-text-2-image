import logo from './inkimagebanner.png'
import logo_icon from './inkimagelogo.png'
import facebook_icon from './facebook_icon.svg'
import instagram_icon from './instagram_icon.svg'
import twitter_icon from './twitter_icon.svg'
import star_icon from './star_icon.svg'
import rating_star from './rating_star.svg'
import sample_img_1 from './sample_img_1.png'
import bannerimg1 from './1stimage.webp'
import bannerimg2 from './3rdimage.webp'
import bannerimg3 from './4thimage.webp'
import bannerimg4 from './5thimage.webp'
import sample_img_2 from './sample_img_2.png'
import profile_img_1 from './img3.jpeg'
import profile_img_3 from './img2.jpg'
// import profile_img_2 from './profile_img_2.png'
import profile_img_2 from './img1.jpeg'
import step_icon_1 from './step_icon_1.svg'
import step_icon_2 from './step_icon_2.svg'
import step_icon_3 from './step_icon_3.svg'
import email_icon from './email_icon.svg'
import lock_icon from './lock_icon.svg'
import cross_icon from './cross_icon.svg'
import star_group from './star_group.png'
import credit_star from './credit_star.svg'
import profile_icon from './profile_icon.png'
import github_icon from './github_icon.svg'
import linkedin_icon from './linkedin_icon.svg'

export const assets = {
    logo,
    logo_icon,
    facebook_icon,
    instagram_icon,
    twitter_icon,
    star_icon,
    rating_star,
    sample_img_1,
    sample_img_2,
    bannerimg1,
    bannerimg2,
    bannerimg3,
    bannerimg4,
    email_icon,
    lock_icon,
    cross_icon,
    star_group,
    credit_star,
    profile_icon,
    github_icon,
    linkedin_icon
}

export const stepsData = [
    {
      title: 'Describe Your Vision',
      description: 'Type a phrase, sentence, or paragraph that describes the image you want to create.',
      icon: step_icon_1,
    },
    {
      title: 'Watch the Magic',
      description: 'Our AI-powered engine will transform your text into a high-quality, unique image in seconds.',
      icon: step_icon_2,
    },
    {
      title: 'Download & Share',
      description: 'Instantly download your creation or share it with the world directly from our platform.',
      icon: step_icon_3,
    },
  ];

export const testimonialsData = [
    {
        image: profile_img_3,
        name: 'Waqar Ali',
        role: 'Marketing Manager',
        stars: 5,
        text: "We needed high quality AI-generated visuals for our social media campaigns and this tool delivered beyond our expectations. The interface is simple, the results are stunning and we saved hours of manual design work. Highly recommended for any marketing team wanting quick creative output!"
    },
    {
        image: profile_img_2,
        name: 'Shahzaib Rao',
        role: 'Designer & Content Creator',
        stars: 5,
        text: "As a freelance content creator, I often struggle to find unique visuals. Since I started using this text to image generator, I can turn my ideas into custom graphics in seconds. The results are surprisingly detailed and the prompts work beautifully. This tool has really boosted my workflow!"
    },
    {
        image: profile_img_1,
        name: 'Zeeshan Ali',
        role: 'CEO Axoon Solutions',
        stars: 5,
        text: "We integrated this tool into our creative agency’s internal process for mockups and concept art. It’s reliable, fast and the quality of AI images is impressive. Even our clients are surprised when we show them drafts made with it. Great work by the developer for building this solution!"
    },
]

export const plans = [
    {
      id: 'Basic',
      price: 0,
      credits: 0,
      desc: 'Best for personal use.'
    },
    {
      id: 'Advanced',
      price: 0,
      credits: 0,
      desc: 'Best for business use.'
    },
    {
      id: 'Business',
      price: 0,
      credits: 0,
      desc: 'Best for enterprise use.'
    },
  ]