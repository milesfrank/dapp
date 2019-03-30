function setup() {
  // createP()
  if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
  } else {
    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
  }
  web3.eth.defaultAccount = web3.eth.accounts[0];
  
  var CoursetroContract = web3.eth.contract([
    {
      "constant": false,
      "inputs": [
        {
          "name": "_bet",
          "type": "uint256"
        }
      ],
      "name": "accept",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_send",
          "type": "uint256"
        },
        {
          "name": "_recv",
          "type": "uint256"
        },
        {
          "name": "_prob",
          "type": "uint256"
        }
      ],
      "name": "createBet",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_value",
          "type": "uint256"
        }
      ],
      "name": "deposit",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_bet",
          "type": "uint256"
        }
      ],
      "name": "doBet",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "send",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "recv",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "prob",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "creator",
          "type": "address"
        }
      ],
      "name": "BetCreated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "total",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "winner",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "loser",
          "type": "address"
        }
      ],
      "name": "BetAcceped",
      "type": "event"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "name": "balences",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "bets",
      "outputs": [
        {
          "name": "send",
          "type": "uint256"
        },
        {
          "name": "recv",
          "type": "uint256"
        },
        {
          "name": "prob",
          "type": "uint256"
        },
        {
          "name": "creator",
          "type": "address"
        },
        {
          "name": "acceptor",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "numBets",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    }
  ]);

  var Coursetro = CoursetroContract.at('0xf07B3c56AECe07800753967Caf14316A65b3b613');
  print(Coursetro);
}

function draw() {
  // put drawing code here
}