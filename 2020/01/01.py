# heheh

# opens file and returns array with values parsed as ints
def prepare_input():
    input_file = open("input", "r")
    output = []

    for value in input_file:
        output.append(int(value))

    return output


# provide array of ints
#
# returns array with entries when successful
# or empty array if something went wrong
def find_entries(array):
    for v1 in array:
        for v2 in array:
            if (v1+v2 == 2020):
                return [v1, v2]

    return []


def main():
    prepared_input = prepare_input()
    entries = find_entries(prepared_input)

    multiplied_entries = entries[0] * entries[1] if len(entries) > 0 else int(-1)
    print("Day 01 - correct answer: {}".format(multiplied_entries))


if __name__ == "__main__":
    main()
