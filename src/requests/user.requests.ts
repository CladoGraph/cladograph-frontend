interface UserUpdateDto {
  name?: string;
  email?: string;
  username?: string;
  password?: string;
}
interface LoginUserDto {
  email: string;
  password: string;
}

interface ResponseBody {
  auth: boolean;
  tokens: Tokens | undefined;
}

interface Tokens {
  accessToken: string;
  refreshToken: string;
}

export default class UserRequests {
  private baseUrl = `${process.env.NEXT_PUBLIC_API_URL}/users`;

  public async updateUser(id: string, userUpdateData: UserUpdateDto) {
    await fetch(`${this.baseUrl}/${id}`, {
      method: "PATCH",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(userUpdateData),
    });
  }
  public async login(loginUserData: LoginUserDto): Promise<ResponseBody> {
    const response = await fetch(`${this.baseUrl}/login`, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(loginUserData),
    });

    const responseBody: any = await response.json();

    if (responseBody.auth === true) {
      return { auth: true, tokens: responseBody.tokens };
    } else if (responseBody.auth === false) {
      return { auth: false, tokens: undefined };
    } else {
      return { auth: false, tokens: undefined };
    }
  }
}
