import { useEffect } from "react";
import { useFullScreenBanner } from "../../components/FullScreenBanner/context/fullScreenBannerContext";
import { motion } from "framer-motion";

const variantLeft = {
  hidden: {
    x: -100,
    opacity: 0,
    rotateY: 90,
  },
  visible: {
    x: 0,
    opacity: 1,
    rotateY: 0,
  },
};

const variantRight = {
  hidden: {
    x: 100,
    opacity: 0,
    rotateY: -90,
  },
  visible: {
    x: 0,
    opacity: 1,
    rotateY: 0,
  },
};

const variantTextLeft = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
  },
};

const variantTextRight = {
  hidden: {
    x: 100,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
  },
};

const About = () => {
  const { setIsVideoEnded } = useFullScreenBanner();

  useEffect(() => {
    setIsVideoEnded(true);
  }, [setIsVideoEnded]);

  return (
    <div className="min-h-screen pt-10 pb-20 md:pb-[200px]">
      <div className="relative md:grid md:grid-cols-2 gap-10 snap-start items-center pb-[50px] md:pb-0">
        <motion.div
          variants={variantLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <img
            className="rounded-lg"
            src="https://www.hawtdotz.com/wp-content/uploads/2024/03/6517-scaled.jpg"
            alt="Virtual Tour"
          />
        </motion.div>
        <motion.div
          variants={variantTextRight}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-gray-500 md:mt-0 mt-5"
        >
          Tesla Model 3 and Model Y were displayed at IOI City Mall Putrajaya on
          February 2024. A significant crowd was attracted to the event, with
          many visitors eager to explore and snap photos, especially with the
          upgraded Model 3’s body structure. It was a remarkable roadshow of
          innovation and sustainability.
        </motion.div>
      </div>

      <div className="relative flex flex-col-reverse md:grid md:grid-cols-2 gap-10 snap-start items-center mt-5 md:mt-[200px] pb-[50px] md:pb-0">
        <motion.div
          variants={variantTextLeft}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-gray-500 md:mt-0"
        >
          With careful planning, our team ensured that every aspect of the event
          was meticulously managed from graphic designs to event execution, we
          spared no effort in delivering an unforgettable roadshow experience
          for all attendees.
        </motion.div>
        <motion.div
          variants={variantRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <img
            className="rounded-lg"
            src="https://www.hawtdotz.com/wp-content/uploads/2024/09/WhatsApp-Image-2024-09-20-at-10.39.18-AM-1.jpeg"
            alt="Virtual Tour"
          />
        </motion.div>
      </div>

      <div className="relative md:grid md:grid-cols-2 gap-10 snap-start items-center mt-5 md:mt-[200px]">
        <motion.div
          variants={variantLeft}
          initial="hidden"
          viewport={{ once: true }}
          whileInView="visible"
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <img
            className="rounded-lg"
            src="https://www.hawtdotz.com/wp-content/uploads/2024/03/2.jpg"
            alt="Virtual Tour"
          />
        </motion.div>
        <motion.div
          variants={variantTextRight}
          initial="hidden"
          viewport={{ once: true }}
          whileInView="visible"
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="text-gray-500 md:mt-0 mt-5"
        >
          The roadshow attracted a diverse crowd, giving visitors the
          opportunity to explore Tesla’s cutting-edge technology up close. Stay
          tuned for more exciting happenings in the future!
        </motion.div>
      </div>
    </div>
  );
};

export default About;
