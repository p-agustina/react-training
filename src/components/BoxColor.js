function BoxColor({ r, g, b }) {
    const color = `rgb(${r}, ${g}, ${b})`;
  
    const boxStyle = {
      width: '200px',
      height: '100px',
      backgroundColor: color,
    };
  
    return <div style={boxStyle}></div>;
  }

export default BoxColor;
