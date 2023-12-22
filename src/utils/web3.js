import { ethers } from 'ethers';
import MyNFTABI from '../contracts/MyNFT.json';

async function main() {
  let provider = new ethers.BrowserProvider(window.ethereum)
  const contractAddress = process.env.REACT_APP_NFT;
  let account = await provider.getSigner();

  const contract = new ethers.Contract(contractAddress, MyNFTABI, account);
  const result = await contract.totalSupply();
  await contract.safeMint(precess.env.REACT_APP_USER, 'https://ipfs.io/ipfs/QmZ4tj')
  console.log(result.toString());
}


export default main;