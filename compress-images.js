import imagemin from "imagemin";
import imageminMozjpeg from "imagemin-mozjpeg";
import imageminPngquant from "imagemin-pngquant";
import imageminWebp from "imagemin-webp";

(async () => {
  await imagemin(["public/**/*.{jpg,png}"], {
    destination: "public",
    plugins: [
      imageminMozjpeg({ quality: 50 }),
      imageminPngquant({ quality: [0.6, 0.8] }),
    ],
  });

  // Optional: also create WebP versions
  await imagemin(["public/**/*.{jpg,png}"], {
    destination: "public/webp",
    plugins: [imageminWebp({ quality: 50 })],
  });

  console.log("✅ Images compressed successfully!");
})();
