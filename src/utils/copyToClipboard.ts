export const copyToClipboard = async (textToCopy: string) => {
  if (navigator.clipboard && window.isSecureContext) {
    await navigator.clipboard.writeText(textToCopy);
  } else {
    const input = document.createElement('textarea');
    input.value = textToCopy;
    input.style.display = 'none';
    document.body.appendChild(input);
    input.select();
    document.execCommand('copy');
    document.body.removeChild(input);
  }
};
