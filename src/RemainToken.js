import web3 from './web3';

//contract address
const address = '0x923ca8180fe7cc5961bd77ba6b5627cc42e009a1';

const abi = [
    {
       "inputs": [],
       "stateMutability": "nonpayable",
       "type": "constructor"
    },
    {
       "anonymous": false,
       "inputs": [
          {
             "indexed": true,
             "internalType": "address",
             "name": "owner",
             "type": "address"
          },
          {
             "indexed": true,
             "internalType": "address",
             "name": "approved",
             "type": "address"
          },
          {
             "indexed": true,
             "internalType": "uint256",
             "name": "tokenId",
             "type": "uint256"
          }
       ],
       "name": "Approval",
       "type": "event"
    },
    {
       "anonymous": false,
       "inputs": [
          {
             "indexed": true,
             "internalType": "address",
             "name": "owner",
             "type": "address"
          },
          {
             "indexed": true,
             "internalType": "address",
             "name": "operator",
             "type": "address"
          },
          {
             "indexed": false,
             "internalType": "bool",
             "name": "approved",
             "type": "bool"
          }
       ],
       "name": "ApprovalForAll",
       "type": "event"
    },
    {
       "anonymous": false,
       "inputs": [
          {
             "indexed": true,
             "internalType": "string",
             "name": "_name",
             "type": "string"
          },
          {
             "indexed": true,
             "internalType": "string",
             "name": "_description",
             "type": "string"
          },
          {
             "indexed": true,
             "internalType": "uint256",
             "name": "_id",
             "type": "uint256"
          }
       ],
       "name": "Course",
       "type": "event"
    },
    {
       "anonymous": false,
       "inputs": [
          {
             "indexed": true,
             "internalType": "string",
             "name": "_course",
             "type": "string"
          },
          {
             "indexed": true,
             "internalType": "string",
             "name": "_locname",
             "type": "string"
          },
          {
             "indexed": false,
             "internalType": "string",
             "name": "_description",
             "type": "string"
          },
          {
             "indexed": true,
             "internalType": "uint256",
             "name": "_id",
             "type": "uint256"
          }
       ],
       "name": "Locations",
       "type": "event"
    },
    {
       "anonymous": false,
       "inputs": [
          {
             "indexed": true,
             "internalType": "address",
             "name": "_from",
             "type": "address"
          },
          {
             "indexed": true,
             "internalType": "address",
             "name": "_to",
             "type": "address"
          },
          {
             "indexed": true,
             "internalType": "uint256",
             "name": "_tokenId",
             "type": "uint256"
          }
       ],
       "name": "Transfer",
       "type": "event"
    },
    {
       "inputs": [
          {
             "internalType": "address",
             "name": "_owner",
             "type": "address"
          }
       ],
       "name": "_getOwnedTokensCount",
       "outputs": [
          {
             "internalType": "uint256",
             "name": "",
             "type": "uint256"
          }
       ],
       "stateMutability": "view",
       "type": "function"
    },
    {
       "inputs": [
          {
             "internalType": "address",
             "name": "to",
             "type": "address"
          },
          {
             "internalType": "uint256",
             "name": "tokenId",
             "type": "uint256"
          }
       ],
       "name": "approve",
       "outputs": [],
       "stateMutability": "nonpayable",
       "type": "function"
    },
    {
       "inputs": [
          {
             "internalType": "address",
             "name": "owner",
             "type": "address"
          }
       ],
       "name": "balanceOf",
       "outputs": [
          {
             "internalType": "uint256",
             "name": "",
             "type": "uint256"
          }
       ],
       "stateMutability": "view",
       "type": "function"
    },
    {
       "inputs": [],
       "name": "baseURI",
       "outputs": [
          {
             "internalType": "string",
             "name": "",
             "type": "string"
          }
       ],
       "stateMutability": "view",
       "type": "function"
    },
    {
       "inputs": [
          {
             "internalType": "uint256",
             "name": "",
             "type": "uint256"
          },
          {
             "internalType": "uint256",
             "name": "",
             "type": "uint256"
          }
       ],
       "name": "courseToLocations",
       "outputs": [
          {
             "internalType": "uint256",
             "name": "",
             "type": "uint256"
          }
       ],
       "stateMutability": "view",
       "type": "function"
    },
    {
       "inputs": [
          {
             "internalType": "uint256",
             "name": "",
             "type": "uint256"
          }
       ],
       "name": "courses",
       "outputs": [
          {
             "internalType": "uint256",
             "name": "",
             "type": "uint256"
          }
       ],
       "stateMutability": "view",
       "type": "function"
    },
    {
       "inputs": [
          {
             "internalType": "uint256",
             "name": "tokenId",
             "type": "uint256"
          }
       ],
       "name": "getApproved",
       "outputs": [
          {
             "internalType": "address",
             "name": "",
             "type": "address"
          }
       ],
       "stateMutability": "view",
       "type": "function"
    },
    {
       "inputs": [
          {
             "internalType": "address",
             "name": "_user",
             "type": "address"
          },
          {
             "internalType": "string",
             "name": "_location",
             "type": "string"
          },
          {
             "internalType": "string",
             "name": "_course",
             "type": "string"
          }
       ],
       "name": "getUserLocationVerified",
       "outputs": [
          {
             "internalType": "bool",
             "name": "",
             "type": "bool"
          }
       ],
       "stateMutability": "view",
       "type": "function"
    },
    {
       "inputs": [
          {
             "internalType": "address",
             "name": "owner",
             "type": "address"
          },
          {
             "internalType": "address",
             "name": "operator",
             "type": "address"
          }
       ],
       "name": "isApprovedForAll",
       "outputs": [
          {
             "internalType": "bool",
             "name": "",
             "type": "bool"
          }
       ],
       "stateMutability": "view",
       "type": "function"
    },
    {
       "inputs": [
          {
             "internalType": "string",
             "name": "_course",
             "type": "string"
          },
          {
             "internalType": "address",
             "name": "_user",
             "type": "address"
          },
          {
             "internalType": "string",
             "name": "_tokenURI",
             "type": "string"
          }
       ],
       "name": "mint",
       "outputs": [],
       "stateMutability": "nonpayable",
       "type": "function"
    },
    {
       "inputs": [],
       "name": "name",
       "outputs": [
          {
             "internalType": "string",
             "name": "",
             "type": "string"
          }
       ],
       "stateMutability": "view",
       "type": "function"
    },
    {
       "inputs": [],
       "name": "owner",
       "outputs": [
          {
             "internalType": "address",
             "name": "",
             "type": "address"
          }
       ],
       "stateMutability": "view",
       "type": "function"
    },
    {
       "inputs": [
          {
             "internalType": "uint256",
             "name": "tokenId",
             "type": "uint256"
          }
       ],
       "name": "ownerOf",
       "outputs": [
          {
             "internalType": "address",
             "name": "",
             "type": "address"
          }
       ],
       "stateMutability": "view",
       "type": "function"
    },
    {
       "inputs": [
          {
             "internalType": "string",
             "name": "course",
             "type": "string"
          },
          {
             "internalType": "string",
             "name": "description",
             "type": "string"
          }
       ],
       "name": "registerCourse",
       "outputs": [],
       "stateMutability": "nonpayable",
       "type": "function"
    },
    {
       "inputs": [
          {
             "internalType": "string",
             "name": "_course",
             "type": "string"
          },
          {
             "internalType": "string",
             "name": "_location",
             "type": "string"
          },
          {
             "internalType": "string",
             "name": "description",
             "type": "string"
          }
       ],
       "name": "registerLocations",
       "outputs": [],
       "stateMutability": "nonpayable",
       "type": "function"
    },
    {
       "inputs": [
          {
             "internalType": "address",
             "name": "from",
             "type": "address"
          },
          {
             "internalType": "address",
             "name": "to",
             "type": "address"
          },
          {
             "internalType": "uint256",
             "name": "tokenId",
             "type": "uint256"
          }
       ],
       "name": "safeTransferFrom",
       "outputs": [],
       "stateMutability": "nonpayable",
       "type": "function"
    },
    {
       "inputs": [
          {
             "internalType": "address",
             "name": "from",
             "type": "address"
          },
          {
             "internalType": "address",
             "name": "to",
             "type": "address"
          },
          {
             "internalType": "uint256",
             "name": "tokenId",
             "type": "uint256"
          },
          {
             "internalType": "bytes",
             "name": "_data",
             "type": "bytes"
          }
       ],
       "name": "safeTransferFrom",
       "outputs": [],
       "stateMutability": "nonpayable",
       "type": "function"
    },
    {
       "inputs": [
          {
             "internalType": "address",
             "name": "operator",
             "type": "address"
          },
          {
             "internalType": "bool",
             "name": "approved",
             "type": "bool"
          }
       ],
       "name": "setApprovalForAll",
       "outputs": [],
       "stateMutability": "nonpayable",
       "type": "function"
    },
    {
       "inputs": [
          {
             "internalType": "bytes4",
             "name": "interfaceId",
             "type": "bytes4"
          }
       ],
       "name": "supportsInterface",
       "outputs": [
          {
             "internalType": "bool",
             "name": "",
             "type": "bool"
          }
       ],
       "stateMutability": "view",
       "type": "function"
    },
    {
       "inputs": [],
       "name": "symbol",
       "outputs": [
          {
             "internalType": "string",
             "name": "",
             "type": "string"
          }
       ],
       "stateMutability": "view",
       "type": "function"
    },
    {
       "inputs": [
          {
             "internalType": "uint256",
             "name": "index",
             "type": "uint256"
          }
       ],
       "name": "tokenByIndex",
       "outputs": [
          {
             "internalType": "uint256",
             "name": "",
             "type": "uint256"
          }
       ],
       "stateMutability": "view",
       "type": "function"
    },
    {
       "inputs": [
          {
             "internalType": "address",
             "name": "owner",
             "type": "address"
          },
          {
             "internalType": "uint256",
             "name": "index",
             "type": "uint256"
          }
       ],
       "name": "tokenOfOwnerByIndex",
       "outputs": [
          {
             "internalType": "uint256",
             "name": "",
             "type": "uint256"
          }
       ],
       "stateMutability": "view",
       "type": "function"
    },
    {
       "inputs": [
          {
             "internalType": "uint256",
             "name": "tokenId",
             "type": "uint256"
          }
       ],
       "name": "tokenURI",
       "outputs": [
          {
             "internalType": "string",
             "name": "",
             "type": "string"
          }
       ],
       "stateMutability": "view",
       "type": "function"
    },
    {
       "inputs": [],
       "name": "totalSupply",
       "outputs": [
          {
             "internalType": "uint256",
             "name": "",
             "type": "uint256"
          }
       ],
       "stateMutability": "view",
       "type": "function"
    },
    {
       "inputs": [
          {
             "internalType": "address",
             "name": "_from",
             "type": "address"
          },
          {
             "internalType": "address",
             "name": "_to",
             "type": "address"
          },
          {
             "internalType": "uint256",
             "name": "_tokenId",
             "type": "uint256"
          }
       ],
       "name": "transferFrom",
       "outputs": [],
       "stateMutability": "nonpayable",
       "type": "function"
    },
    {
       "inputs": [
          {
             "internalType": "address",
             "name": "",
             "type": "address"
          },
          {
             "internalType": "uint256",
             "name": "",
             "type": "uint256"
          },
          {
             "internalType": "uint256",
             "name": "",
             "type": "uint256"
          }
       ],
       "name": "userLocationVerified",
       "outputs": [
          {
             "internalType": "uint256",
             "name": "",
             "type": "uint256"
          }
       ],
       "stateMutability": "view",
       "type": "function"
    },
    {
       "inputs": [
          {
             "internalType": "address",
             "name": "_user",
             "type": "address"
          },
          {
             "internalType": "string",
             "name": "_location",
             "type": "string"
          },
          {
             "internalType": "string",
             "name": "_course",
             "type": "string"
          }
       ],
       "name": "verifyUserCouseToMintToken",
       "outputs": [
          {
             "internalType": "bool",
             "name": "",
             "type": "bool"
          }
       ],
       "stateMutability": "nonpayable",
       "type": "function"
    },
    {
       "inputs": [
          {
             "internalType": "address",
             "name": "_user",
             "type": "address"
          },
          {
             "internalType": "string",
             "name": "_location",
             "type": "string"
          },
          {
             "internalType": "string",
             "name": "_course",
             "type": "string"
          }
       ],
       "name": "verifyUserLocation",
       "outputs": [],
       "stateMutability": "nonpayable",
       "type": "function"
    }
 ]

 export default new web3.eth.Contract(abi, address);