<div align="center">
  <img src="https://github.com/ReCodes26/PlaceGradient/blob/main/app/PlaceGradientPNG.png" alt="LocalPrompts Logo" width="150" />

  #  PlaceGradient

  <p>PlaceGradient is an open-source developer tool that generates customizable SVG placeholder gradients instantly.</p>


   ![License](https://img.shields.io/badge/License-MIT-blue.svg)
   ![Stack](https://img.shields.io/badge/Stack-NextJS%20%7C%20Typescript%20%7C%20Tailwind-green?style=flat)

  <p>
    <a href="https://placegradient.recodes26.dev/" target="_blank">🚀 Visit PlaceGradient</a>
  </p>
    <p>
              <i>If you found PlaceGradient useful, please give it a star ⭐ on GitHub. Thank you for your support!</i>
    </p>
</div>


## About

I needed a gradient placeholder API for my portfolio website, but I could not find one that met my needs. So, that's why I created a simple API tool called PlaceGradient. PlaceGradient is a web tool that generates linear SVG gradients for placeholder images. It utilizes a straightforward GET API with customizable parameters to generate SVG gradients. You can customize your gradient's size, color, color theory, and randomization seed.

<img width=200 height=200 src="https://placegradient.recodes26.dev/api" /> <--- Generated with [PlaceGradient](https://placegradient.recodes26.dev/) API

## API Usage

To generate a random gradient, use the following URL in your browser or img tag:

```bash
https://placegradient.recodes26.dev/api
```

### Customize Width and Height

You can set the width and height of your gradient with these parameters.

To make a square image:

```bash
https://placegradient.recodes26.dev/api/500
```

To make a rectangular image:

```bash
https://placegradient.recodes26.dev/api/500/750
```

If you do not specify a width or height, it will default to a size of 400x400.

### Custom CSS colors

The API supports over 140 CSS color names. You can specify the base color to use for your gradient. To change your gradient's base color, use the color parameter. You cannot use hex codes for colors yet.

```bash
https://placegradient.recodes26.dev/api/500/500?color=SaddleBrown
```

### Color Theory

PlaceGradient uses color theories to generate the gradient color scheme. You can choose from complementary, analogous, and monochromatic color schemes. To use a specific color theory, use the theory parameter.

1. Monochromatic

```bash
https://placegradient.recodes26.dev/api?theory=mono
```

2. Complementary

```bash
https://placegradient.recodes26.dev/api?theory=comp
```

3. Analogous

```bash
https://placegradient.recodes26.dev/api?theory=analog
```

### Seed

If you want a predictable gradient every generation, use a seed. To input a custom seed, use the seed parameter. Your seed cannot be more than 20 characters.

```bash
https://placegradient.recodes26.dev/api?seed=my-cool-gradient
```

### Combining Parameters

You can fully customize your gradient by combining all of the parameters. For each additional parameter, use an ampersand (&) in the URL.

```bash
https://placegradient.recodes26.dev/api/400/200?theory=analog&color=MediumSlateBlue&seed=happy
```



## Use Cases

This tool is ideal for placeholder images, making it perfect for web development, UI mockups, prototypes, and responsive applications. However, you can use it in production for gradient images and backgrounds. You can also save your SVGs directly to your device.

Note for NextJS users: If you use the PlaceGradient URL in a NextJS Image component, you must add unoptimized to your component, or else your gradient will not work.



## Contributing

Pull requests are welcome. For major changes, open an issue first.



## License

[MIT](https://choosealicense.com/licenses/mit/)
