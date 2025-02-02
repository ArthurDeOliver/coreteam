/*
  Warnings:

  - You are about to alter the column `salary` on the `employee` table. The data in that column could be lost. The data in that column will be cast from `Double` to `VarChar(191)`.
  - You are about to drop the `employeeteam` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[teamId]` on the table `employee` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE `employeeteam` DROP FOREIGN KEY `EmployeeTeam_employeeCpf_fkey`;

-- DropForeignKey
ALTER TABLE `employeeteam` DROP FOREIGN KEY `EmployeeTeam_teamId_fkey`;

-- AlterTable
ALTER TABLE `employee` ADD COLUMN `teamId` INTEGER NULL,
    MODIFY `salary` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `employeeteam`;

-- CreateIndex
CREATE UNIQUE INDEX `employee_teamId_key` ON `employee`(`teamId`);

-- AddForeignKey
ALTER TABLE `employee` ADD CONSTRAINT `employee_teamId_fkey` FOREIGN KEY (`teamId`) REFERENCES `team`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
