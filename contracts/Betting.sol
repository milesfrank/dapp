pragma solidity ^0.5.0;

contract Betting{
    
    address public owner;
    mapping (address => uint) public balences;

    event BetCreated (
        uint send,
        uint recv,
        uint prob,
        address creator
    );

    event BetAcceped (
        uint total,
        address winner,
        address loser
    );
    
    struct Bet {
        uint send;
        uint recv;
        uint prob;
        address creator;
        address acceptor;
    }
    
    Bet[] public bets;
    uint public numBets;

    constructor() public {
        owner = msg.sender;
    }
    
    function deposit(uint _value) public {
        balences[msg.sender] += _value;
    }
    
    function createBet(uint _send, uint _recv, uint _prob) public {
        if(balences[msg.sender] >= _send){
            balences[msg.sender] -= _send;
            bets.push(Bet({
                send: _send,
                recv: _recv,
                prob: _prob,
                creator: msg.sender,
                acceptor: msg.sender
            }));
            emit BetCreated(_send, _recv, _prob, msg.sender);
        }
    }
    
    function accept(uint _bet) public {
        if(balences[msg.sender] >= bets[_bet].recv){
            bets[_bet].acceptor = msg.sender;
            balences[msg.sender] -= bets[_bet].recv;
            doBet(_bet);
        }
    }
    
    function doBet(uint _bet) public {
        Bet memory bet = bets[_bet];
        uint random = uint(block.timestamp) % 100;
        uint total = bet.send + bet.recv;
        address winner;
        address loser;
        if(random <= bet.prob){
            balences[bet.creator] += total;
            winner = bet.creator;
            loser = bet.acceptor;
        }else{
            balences[bet.acceptor] += total;
            winner = bet.acceptor;
            loser = bet.creator;
        }
        emit BetAcceped(total, winner, loser);
        delete bets[_bet];
    }
}