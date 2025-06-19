import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getTeams = async (req: Request, res: Response): Promise<void> => {
  try {
    const teams = await prisma.team.findMany();

    const teamsWithUsernames = await Promise.all(
      // promise의 값이 배열로 여러개 반환
      teams.map(async (team: any) => {
        const productOwner = await prisma.user.findUnique({
          where: { userId: team.productOwnerUserId! }, // !는 값이 무조건 있다는 것을 보장
          select: { username: true }, // 조회할 필드 지정
        });

        const productManager = await prisma.user.findUnique({
          where: { userId: team.projectManagerUserId! }, // !는 값이 무조건 있다는 것을 보장
          select: { username: true }, // 조회할 필드 지정
        });

        return {
          ...team,
          productOwner: productOwner?.username,
          productManager: productManager?.username,
        };
      })
    );

    res.json(teamsWithUsernames);
  } catch (error: any) {
    res
      .status(500)
      .json({ message: 'Internal Server Error: ' + error.message });
  }
};
