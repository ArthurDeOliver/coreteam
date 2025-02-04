-- CreateTable
CREATE TABLE `employee` (
    `cpf` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `salary` VARCHAR(191) NOT NULL,
    `role` VARCHAR(191) NOT NULL,
    `teamId` INTEGER NULL,

    PRIMARY KEY (`cpf`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `team` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `employee` ADD CONSTRAINT `employee_teamId_fkey` FOREIGN KEY (`teamId`) REFERENCES `team`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
