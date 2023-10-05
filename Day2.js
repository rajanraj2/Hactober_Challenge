// Link to problems:
// https://codedamn.com/problem/_ypJRv05F2PLj2QGvYoC6?challengeList=_ypJRv05F2PLj2QGvYoC6


/**
 * Returns a 6 digit hexCode prepended with '#' as a valid color code
 * @returns {string} hexCode
 */
export function generateRandomHexCode() {
	
    const randomComponent = () => {
        const component = Math.floor(Math.random() * 256).toString(16);
        return component.length === 1 ? '0' + component : component;
      };
    
      const hexCode = '#' + randomComponent() + randomComponent() + randomComponent();
      return hexCode;
}

for (let i = 0; i < 100; i++) {
	console.log(generateRandomHexCode());
}
