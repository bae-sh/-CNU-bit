// 출처 https://velog.io/@hoon_dev/%EB%A6%AC%EC%95%A1%ED%8A%B8%EB%A1%9C-%EB%A1%9C%EA%B7%B8%EC%9D%B8-%EA%B8%B0%EB%8A%A5-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0#%EB%A1%9C%EA%B7%B8%EC%9D%B8-%EC%84%9C%EB%B2%84-%ED%86%B5%EC%8B%A0%ED%95%98%EC%97%AC-%EB%8D%B0%EC%9D%B4%ED%84%B0-%EB%B0%9B%EA%B3%A0-%EC%B2%98%EB%A6%AC%ED%95%98%EA%B8%B0

//동기식 방식 ( async await 사용!!!!!)
export const fetchLogin = async ({ id, password, count }) => {
    const response = await fetch("http://localhost:4000/users");

    if (response.ok) {
        //서버통신이 성공적으로 이루어지면 users에 json값 대입
        const users = await response.json();

        //users안 객체들을 순회하면서 그 객체들의 id값과 form 컴포넌트에서 받음 account의 id값과 비교
        //서로 일치하는 것만 user에 대입
        const user = users.find((user) => user.id === id);
        if (!user) {
            throw new Error("아이디가 존재하지 않습니다.");
        }
        if (count === 1) {
            return user;
        }
        //일치하는 user가 없거나, 비밀번호가 틀리면 해당 에러 생성
        if (user.password !== password) {
            throw new Error("아이디 또는 비밀번호가 일치하지 않습니다.");
        }

        //모든게 일치하면 그 user 정보 return -> 이 return값이 form 컴포넌트 내 fetchLogin 함수 값으로 출력되는것
        //form 컴포넌트에서 setUser값에 넣어야함
        return user;
    }

    //서버 통신이 안이루어졌을떄
    throw new Error("서버 통신이 원할하지 않습니다.");
};
