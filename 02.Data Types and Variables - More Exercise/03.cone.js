function cone(radius, height) {
   let volume = Math.PI * radius * radius * height / 3;
   let area = Math.sqrt((radius * radius) + (height * height));
   let totalArea = Math.PI * radius * area + (Math.PI * radius * radius);
   console.log(`volume = ${volume.toFixed(4)}`);
   console.log(`area = ${totalArea.toFixed(4)}`);
}

cone(3,
    5);