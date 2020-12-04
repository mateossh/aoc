# hyhyhyhy

def prepare_input():
    input_file = open("input.txt", "r")

    output = []
    tmp = ""

    for line in input_file:
        if tmp == "":
            tmp = line[:-1]
        else:
            tmp += " " + line[:-1]

        if (line[:-1] == ""):
            output.append(tmp)
            tmp = ""

    return output

# https://stackoverflow.com/a/3389611
def is_valid_passport(passport):
    attributes = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"]
    if all(x in passport for x in attributes):
        return True


def main():
    passports = prepare_input()
    valid_passports = 0

    for passport in passports:
        if is_valid_passport(passport):
            valid_passports += 1

    print("Day 03, answer - {}".format(valid_passports))


if __name__ == "__main__":
    main()
