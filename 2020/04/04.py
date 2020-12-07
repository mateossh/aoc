# hyhyhyhy
import string

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

    input_file.close()
    return output

# https://stackoverflow.com/a/3389611
def has_necessary_attributes(passport):
    attributes = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"]
    if all(x in passport for x in attributes):
        return True


def parse_passports_data(passport):
    key_value = passport.split(" ")

    for value in key_value:
        if value != '':
            key = value.split(":")[0]
            val = value.split(":")[1]

            if key == "byr":
                if int(val) < 1920 or int(val) > 2002:
                    return False

            if key == "iyr":
                if int(val) < 2010 or int(val) > 2020:
                    return False

            if key == "eyr":
                if int(val) < 2020 or int(val) > 2030:
                    return False

            if key == "hgt":
                if "cm" in val or "in" in val:
                    measurement_unit = val[-2:]
                    number = int(val[:-2])

                    if measurement_unit == "cm":
                        if number < 150 or number > 193:
                            return False
                    elif measurement_unit == "in":
                        if number < 59 or number > 76:
                            return False
                else:
                    return False

            if key == "hcl":
                # https://stackoverflow.com/a/11592279
                if val[0] != "#" or all(char in string.hexdigits for char in val[1:]) == False:
                    return False

            if key == "ecl":
                correct_values = ["amb", "blu", "brn", "gry", "grn", "hzl", "oth"]
                if not any(color in value for color in correct_values):
                    return False

            if key == "pid":
                if len(val) != 9 or val.isnumeric() == False:
                    return False

    return True


def main():
    passports = prepare_input()
    valid_passports = []
    valid_passports_2 = []

    for passport in passports:
        if has_necessary_attributes(passport):
            valid_passports.append(passport)

    for passport in valid_passports:
        if parse_passports_data(passport):
            valid_passports_2.append(passport)

    print("Day 04 *  - answer - {}".format(len(valid_passports)))
    print("Day 04 ** - answer - {}".format(len(valid_passports_2)))

if __name__ == "__main__":
    main()
