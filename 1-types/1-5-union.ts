{
    /**
     * Union types: OR
     */
    type Direction = 'left' | 'right' | 'up' | 'down';
    function move(direction: Direction){
        console.log(direction);
    }
    move('left');

    type TileSize = 8 | 16 | 32;
    const tile: TileSize = 16;

    type SuccessState = {
        response: {
            body: string;
        }
    }
    type FailState = {
        reason: string
    }
    type LoginState = SuccessState | FailState
    function login(): LoginState{
        return{
            response: {
                body: 'login success'
            }
        }
    }

    function printLoginState(state: LoginState){
        if('response' in state){
            console.log(state.response.body);
        } else{
            console.log(state.reason);
        }
    }
}