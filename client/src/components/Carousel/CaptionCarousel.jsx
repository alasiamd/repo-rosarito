import React from 'react'
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Container,
} from '@chakra-ui/react'
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi'
import Slider from 'react-slick'
import {useState} from 'react'


const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 3000,
  slidesToShow: 1,
  slidesToScroll: 1,
}

export default function CaptionCarousel() {

  const [slider, setSlider] = useState()

  const top = useBreakpointValue({ base: '90%', md: '50%' })
  const side = useBreakpointValue({ base: '30%', md: '40px' })

  const cards = [
    {
      image: require('../images/sillonesxl.png'),
      title: 'juego de sillones',
      text: "juego de sillones rusticos de eucaliptus largo:1.90 ancho:0.80.",
     
        
    },
    {
      title: 'juego de reposeras',
      text: "juego de reposeras rusticas de eucaliptus largo:1.90 ancho:0.80.",
      image:require('../images/reposerasxl.png'),
       
    },
    {
      title: 'hamaca',
      text: "Hamaca con techo para dos personas largo: 1.80 ancho: 1.50",
      image: require('../images/hamacaxl.png'), 
        
    },
    {
      title: 'cuadrosMaceta',
      text: "Cuadros de maceta para jardin largo: 1.10 ancho: 1.00",
      image: require('../images/cuadrosMaceta.png'), 
    }    
    

  ]

  return (
    <Box position={'relative'} height={'400px'} width={'full'} overflow={'hidden'}>
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        variant="ghost"
        position="absolute"
        left={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickPrev()}>
        <BiLeftArrowAlt size="40px" />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        variant="ghost"
        position="absolute"
        right={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickNext()}>
        <BiRightArrowAlt size="40px" />
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
  {cards.map((card, index) => (
    <Box
      key={index}
      height={'600px'}
      position="relative"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      backgroundImage={`url(${card.image})`}
    >
      <Container size="container.lg" height="500px" position="relative">
        <Stack
          spacing={6}
          w={'full'}
          maxW={'lg'}
          position="absolute"
          top="50%"
          transform="translate(0, -50%)"
        >
          <img
            src={card.image}
            alt={card.title}
            style={{ maxWidth: '100%', height: 'auto' }} // Estilos para ajustar el tamaño
          />
          <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
            {card.title}
          </Heading>
          <Text fontSize={{ base: 'md', lg: 'lg' }} color="white" font-weight="bold" >
            {card.text}
          </Text>
        </Stack>
      </Container>
    </Box>
  ))}
</Slider>

    </Box>
  )
}