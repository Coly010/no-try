import { noTry, noTryAsync, useTry, useTryAsync } from "../src";

describe("noTry", () => {
  describe("Sync Tests", () => {
    const throwable = (error: boolean = false) => {
      if (error) {
        throw new Error("Catch me");
      }

      return "Hello World";
    };

    it("should return result of throwable function without error when successful", () => {
      // Act
      const [error, result] = noTry(() => throwable());

      // Assert
      expect(result).toEqual("Hello World");
      expect(error).toBeFalsy();
    });

    it("should return result of throwable function with error when unsuccessful", () => {
      // Act
      const [error, result] = noTry(() => throwable(true));

      // Assert
      expect(result).toBeFalsy();
      expect(error.message).toEqual("Catch me");
    });

    it("should return result of throwable function with error when unsuccessful and perform a unique handle", () => {
      // Arrange
      const consoleSpy = jest.spyOn(console, "log");
      let weFoundError = (error: Error) => {
        console.log(error.message);
      };
      // Act
      const [error, result] = noTry(() => throwable(true), weFoundError);

      // Assert
      expect(result).toBeFalsy();
      expect(error.message).toEqual("Catch me");
      expect(consoleSpy).toHaveBeenCalled();
      expect(consoleSpy).toHaveBeenCalledWith("Catch me");
    });
  });

  describe("Async Tests", () => {
    const asyncThrowable = (error: boolean = false) => {
      return new Promise((res, rej) => {
        if (error) {
          rej(new Error("Catch me"));
        }
        res("Hello World");
      });
    };

    it("should return result of throwable function without error when successful", async () => {
      // Act
      const [error, result] = await noTryAsync(() => asyncThrowable());

      // Assert
      expect(result).toEqual("Hello World");
      expect(error).toBeFalsy();
    });

    it("should return result of throwable function with error when unsuccessful", async () => {
      // Act
      const [error, result] = await noTryAsync(() => asyncThrowable(true));

      // Assert
      expect(result).toBeFalsy();
      expect(error.message).toEqual("Catch me");
    });

    it("should return result of throwable function with error when unsuccessful and perform a unique handle", async () => {
      // Arrange
      const consoleSpy = jest.spyOn(console, "log");
      let weFoundError = (error: Error) => {
        console.log(error.message);
      };
      // Act
      const [error, result] = await noTryAsync(() => asyncThrowable(true), weFoundError);

      // Assert
      expect(result).toBeFalsy();
      expect(error.message).toEqual("Catch me");
      expect(consoleSpy).toHaveBeenCalled();
      expect(consoleSpy).toHaveBeenCalledWith("Catch me");
    });
  });
});

describe("useTry", () => {
  describe("Sync Tests", () => {
    const throwable = (error: boolean = false) => {
      if (error) {
        throw new Error("Catch me");
      }

      return "Hello World";
    };

    it("should return result of throwable function without error when successful", () => {
      // Act
      const [error, result] = useTry(() => throwable());

      // Assert
      expect(result).toEqual("Hello World");
      expect(error).toBeFalsy();
    });

    it("should return result of throwable function with error when unsuccessful", () => {
      // Act
      const [error, result] = useTry(() => throwable(true));

      // Assert
      expect(result).toBeFalsy();
      expect(error.message).toEqual("Catch me");
    });

    it("should return result of throwable function with error when unsuccessful and perform a unique handle", () => {
      // Arrange
      const consoleSpy = jest.spyOn(console, "log");
      let weFoundError = (error: Error) => {
        console.log(error.message);
      };
      // Act
      const [error, result] = useTry(() => throwable(true), weFoundError);

      // Assert
      expect(result).toBeFalsy();
      expect(error.message).toEqual("Catch me");
      expect(consoleSpy).toHaveBeenCalled();
      expect(consoleSpy).toHaveBeenCalledWith("Catch me");
    });
  });

  describe("Async Tests", () => {
    const asyncThrowable = (error: boolean = false) => {
      return new Promise((res, rej) => {
        if (error) {
          rej(new Error("Catch me"));
        }
        res("Hello World");
      });
    };

    it("should return result of throwable function without error when successful", async () => {
      // Act
      const [error, result] = await useTryAsync(() => asyncThrowable());

      // Assert
      expect(result).toEqual("Hello World");
      expect(error).toBeFalsy();
    });

    it("should return result of throwable function with error when unsuccessful", async () => {
      // Act
      const [error, result] = await useTryAsync(() => asyncThrowable(true));

      // Assert
      expect(result).toBeFalsy();
      expect(error.message).toEqual("Catch me");
    });

    it("should return result of throwable function with error when unsuccessful and perform a unique handle", async () => {
      // Arrange
      const consoleSpy = jest.spyOn(console, "log");
      let weFoundError = (error: Error) => {
        console.log(error.message);
      };
      // Act
      const [error, result] = await useTryAsync(() => asyncThrowable(true), weFoundError);

      // Assert
      expect(result).toBeFalsy();
      expect(error.message).toEqual("Catch me");
      expect(consoleSpy).toHaveBeenCalled();
      expect(consoleSpy).toHaveBeenCalledWith("Catch me");
    });
  });
});
