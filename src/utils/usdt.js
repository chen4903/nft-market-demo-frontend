import { ethers } from 'ethers';
import ABI from '../contracts/cUSDT.json';

let provider = new ethers.BrowserProvider(window.ethereum)
const contractAddress = process.env.REACT_APP_USDT;

export async function approve(spender, amount) {
  const contract = new ethers.Contract(contractAddress, ABI, await provider.getSigner());
  const result = await contract.approve(spender, amount);
  console.log(result.hash);
}

export async function getAllowance(owner, spender) {
  const contract = new ethers.Contract(contractAddress, ABI, await provider.getSigner());
  const result = await contract.allowance(owner, spender);
  return Number(result);
}

