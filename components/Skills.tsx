import React from 'react'
import { motion } from 'framer-motion';
import Skill from './Skill';

type Props = {}

function Skills({}: Props) {
  return (
    <motion.div
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:1.5}}
        
    
    
    className='h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center top-11'>
        <motion.h3

       
        
        className='absolute top-0 uppercase tracking-[20px] text-gray-500 text-2xl'>Skills</motion.h3>

        <h3 className='absolute top-11 uppercase tracking-[3px]   text-gray-500 text-sm'>
            Hover over a skill for current proficiency
        </h3>
        <div className=' grid grid-cols-4 gap-5'>
            <Skill   image='data:image/png;base64,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' proficiency='50'  />
            <Skill image='https://uploads.sololearn.com/uploads/courses/1073.png' proficiency='75'/>
            <Skill image='https://decodenatura.com/static/fb8aa1bb70c9925ce1ae22dc2711b343/nextjs-logo.png' proficiency='67' />
            <Skill image='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAR8AAACvCAMAAADzNCq+AAAAY1BMVEX///84vfgjufgvu/geuPjp9/73/P/t+f7i9P76/v+r4PzU7/3z+/+l3vvM7P265fxlyfmR1/tCwPiB0vpZxvlzzfrI6/3a8v6d2/u+5/w8v/iy4vxgyPlSxPmn3/t90fqL1frNJVehAAAI+0lEQVR4nO2daZuyOgyGhwaRRQQKFQQZ+P+/8rDpuODIkrSnzHt/9BoZ+tglTZP060s5u/TsRpUIk5Jzo4WXoYgjPzjae9XvphTLPmeCG8AYNBj3tB+w5vP8EgW2pfpFFeCkbmi0whi/08qUh9nxT2lknSv+WZoHkSAs/spgO4um30zW5qYRM8PCUf3u5KT1EnGuErHqqLoBpATlYnGuEuX+QXUrqHA5WyXOIBHUm5yJAhR1eoWizS1nXomlTqcQ81U3CBUrxlSnheVn1Y3C42ysm5XHFbrYqtuFg1Nhd54eYK7qpmFgc4LO08PCnerWrSag6Tw9ALrPQpFJKE8Di1W3cBWCsvd0QKnxGAvJ5WkEMrTdk4VkM/MDuq5j9IPrKpCWk5A0eRqBhOrGzieSJ08zCSW6eT1c4oX9WSCul9PjKLP3dALlOvWgnZyV60EgQyNDKJGvTyOQNhv6WvboGkhVN3waR7lz8w+ghUCWgsE1wJCHGMmBW6VOHwNwBaLYuUhf2ukEKiiOAUqV8jTgCeSZBCtiprT7NACWHbQ3cqQn3T/0nTx9RA/rgn20EMjhFH6BeKTxrTClqP3gfDoFRVYLzpZHKUgTqAR2wnjOA7uX7gMmj4OXcZwW1dpYhV/0yREECsHI8Y+xn9Z2YHn01mazfSqJIF89sQpmAL5XyX7oPsCSDz3UE1QKrbSkW+ceC9Y9Y4T72QfMxPv8DbuiUYit8tp3vk9AH173sw8rJ76hTXPKYRaLm+F07gfAX73qW1cAY0bnDHKKLsSyha3Y9yfi63rgGNbPu1WzvHkHEl/+QvPFG34tfOOwGFq54FjcJREoWeCUvjViafd7z7DzWuQrTymsaoDZFl519V0xdIe/1yvPqkXfPpD4ZGeOseNtJiQwfvrFffG0+EUSRwX59Gl2fzcNsgm2yUx6eVYYVTRHikxMGylWdjfEIVnejDec2tat29L5JAIBZJ8tPcc37v85wdZUwPrHkixj7Uan/n2/YddPVny5rh0jOAjy0IXjAeP+O4l2RfK8x2H4cXvN8MJ46pnM/QgsF763fziScPanLHn1RRHMPl8VsOU7njtOhP7Z1oXJE1FnflG4flYlfDxFz8QPSXM4i3CeRClQL1Ln6oWXpM6fv7jgtOSe1EQzqKgF+gjJsQXijK9YIEAaCA8kmNEldJP0FHKCU+U9rj1FGnX/AYK1Hf8gX51AsGx7LRt1AmmSm6hoDiLYeBGhZBXDMuJkoKAHUWws6FAgkE5BwjePrTSww/PIsSkye99iajM339jRZa++yoPif5CMJSPHrkPXNLJYTjS1qW1JBiKn9JM8Og6ugSN1xKJOZvMY+wttFwLAPw2UC2nUMJR6JdeNkZLECHWYeng0PoFeI6cHCMIM1YBbY2mAhfqPrRsu9kIGhsbL+gj7GDPaFVisibNwOrYwkRQCFmqRbjiXHUrENDCxSXVa9hlfKRGDWDdXzzy8ClbUKS1dvfyESzgEC+vc8myzA+sJ6xwb5nSN2qiN8s+IM5C6Vck+FtruAlou9XlDtuAMLK+oQ26w56AeuJZp52EUpKqKRzsNVoujtHy1c9gdAzeLRZKUJedlmSRtmf+sONkHFS928E5uVIVJmbf5pWYD5LxMRNy+kYL3+R+RBvXl2ptfR3rbo01e+ce/ONgtr433nFBcv7t4IA40qsmznn0gjDn3DrQDj0fe9qvqtzhBuMhkhaYbaVvBcTJ2vdye74LXN23Qn5K1ToUtb5fPa3fLg0LJJofZGe/egY/lAvQDNzkdWLgt0zHCLm4ALN7Ocu9RnMkBbOW8iao2OhNbWOz3CV2m2vy09P8dR7rzbqNNS9d8FqIO7weu9c7VJ49pA5I0GUlIqf1tahTK/4ik8rtM6DkJSatOrGfclsTizYBcTlYG9FPzPQRlUmiRnXWl2TJmS6/drFX4nyMxHeQmkEYhbkJF6W99Qvtp6hN9RJfMmVRVTrUm15mquNVjEAi7B1HEpSoaXR0mrkAugT6vpa1lgtqDvBDxYVck3Yb3DvMbrSU7CptKeVUihiWQw00C5xsff+vbtQP0Fw9gDbGQEVRB+B7pPm1QYxL5wdFLU+8YfEdhPiX0Z7lAKIZixQhK7zoj4hgj4U0Hz18UdixPoIgZJn4oxNPa3t478N7zcKyAaLJan2Tduob52oe84OSP6iTn312fBxctauGR5dV/e1p5COqrPaSYs8sUp1WR01TbXVUVvztYIBhed4sX4xMPN52MZB5ac9drX0Eaf3j9FNqBOVbInqQ2BiQLNwdWv3+kKxw/P1u1IKkazxd57a8Z4AzdOLz5NeZbaHZJMsYW7A+uJ+KAv/caboWBfMnERnJ1hVnPfAvnlh2PX0nDGe4duCwb9yRhQsBn/Vbej98cf3bue+byhZWmjNqM4/l99fMTEfhqL6325opZ3yPZb0A+7WjMerQzaC5dWic7URk1Fn42VA/Zw/8mWNy/YX2v3NFEmzUbneLX/mDXTwYGww9tbKyq9fvmPVE4HjAm3mWNpv5L2gPB1qsZXhilyQ4khtAgUR4X3oPVZ3mugJGcEIYfUVQwnJqsFplAvUZglGFcR1kWxSGHcTcdxTlauGZDeA+pQL1KV979Ab7t0xiHaM5aS0FwwwMUsTIe4ox/UCsQwc6r2R1gBnCpFQh/496A2yVVCqRFkIM6gQD/SioKlAmkS21rRQLpEmMlww4ageC6STIUCASlTqkKjvRANN3i8CXHEulXvZnEa/8OfQKEf6jlpXGsPbNXQyGrB+kpj5Sq8TrL8/W1k7HO63stQ4Mgn4RMnbJ/XinIQvE69L93wKaoiX6FlVon0ffQpbOyWnXbUCCqVLGFIh4D6FWEGkyxodLxuxCraPwAGHql9X7kiDlPA6s31HkGziXSKAMmNPNmTOSEoRCY27yVoSON1+VuAINoAybPL1hFsuLegUuhkxt1IXZWzk+SaisBZ9vuOnfYbjijUDIAM0SxzTn5LY73LeBjTmJ374D4/iMlpF/YeW4d8mvy5j39Z0nsn/7MoHqPfTwXWR1XImwRVd3eOuDZW6gi+Y9//OM9/wEuQoe2zzDLwQAAAABJRU5ErkJggg==' proficiency='90'/>
            <Skill image='' proficiency=''/>
            <Skill image='' proficiency=''/>
           
        </div>


    </motion.div>
  )
}

export default Skills